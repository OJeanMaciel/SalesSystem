import { useEffect, useState } from "react";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { DollarCircleOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { getOrders, getRevenue } from "../../api/api";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard() {
    return (
        <div>
            <Space size={20} direction="vertical">
                <Typography.Title level={4}>Painel de Controle</Typography.Title>
                <Space direction="horizontal">
                    <DashboardCard
                        icon={<ShoppingCartOutlined
                            style={{
                                color: 'green',
                                backgroundColor: 'rgb(180, 235, 52)',
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8
                            }}
                        />} title="Pedidos" value={12345} />
                    <DashboardCard
                        icon={<ShoppingCartOutlined
                            style={{
                                color: '#fa5c00',
                                backgroundColor: 'rgb(235,52,52)',
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8
                            }}
                        />} title="Inventário" value={12345} />
                    <DashboardCard
                        icon={<UserOutlined
                            style={{
                                color: 'blue',
                                backgroundColor: 'rgb(3, 198, 252)',
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8
                            }}
                        />} title="Clientes" value={12345} />
                    <DashboardCard icon={<DollarCircleOutlined
                        style={{
                            color: 'orange',
                            backgroundColor: 'rgb(252,82,3)',
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8
                        }}
                    />} title="Receita" value={12345} />
                </Space>
                <Space>
                    <PedidosRecentes />
                    <GraficoPainelControle />
                </Space>
            </Space>
        </div>
    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    );
}

function PedidosRecentes() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      getOrders().then((res) => {
        setDataSource(res.products.splice(0, 3));
        setLoading(false);
      });
    }, []);
  
    return (
      <>
        <Typography.Text>Pedidos Recentes</Typography.Text>
        <Table
          columns={[
            {
              title: "Título",
              dataIndex: "title",
            },
            {
              title: "Quantidade",
              dataIndex: "quantity",
            },
            {
              title: "Preço",
              dataIndex: "discountedPrice",
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={false}
        ></Table>
      </>
    );
  }

  function GraficoPainelControle() {
    const [reveneuData, setReveneuData] = useState({
      labels: [],
      datasets: [],
    });
  
    useEffect(() => {
      getRevenue().then((res) => {
        const labels = res.carts.map((cart) => {
          return `Usuário-${cart.userId}`;
        });
        const data = res.carts.map((cart) => {
          return cart.discountedTotal;
        });
  
        const dataSource = {
          labels,
          datasets: [
            {
              label: "Receita",
              data: data,
              backgroundColor: "rgba(255, 0, 0, 1)",
            },
          ],
        };
  
        setReveneuData(dataSource);
      });
    }, []);
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Receita dos Pedidos",
        },
      },
    };
  
    return (
      <Card style={{ width: 500, height: 250 }}>
        <Bar options={options} data={reveneuData} />
      </Card>
    );
}

export default Dashboard;
