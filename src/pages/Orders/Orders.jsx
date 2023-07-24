import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../api/api";

function Orders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getOrders().then(res => {
            setDataSource(res.products)
            setLoading(false)
        })

    }, []);

    return (
        <div>
            <Space size={20} direction="vertical">
                <Typography.Title level={4}>Ordem de Pedidos</Typography.Title>
                <Table
                loading={loading} 
                columns={[
                    {
                        title: "Title",
                        dataIndex: "title"
                    },
                    {
                        title: "Price",
                        dataIndex: "price",
                        render: (value) => <span>${value}</span>
                    },
                    {
                        title: "DiscountedPrice",
                        dataIndex: "discountedPrice",
                        render: (value) => <span>${value}</span>
                    },
                    {
                        title: "Quantity",
                        dataIndex: "quantity",
                    },
                    {
                        title: "Total",
                        dataIndex: "total"
                    }
                ]}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5,
                }}
                ></Table>
            </Space>
        </div>
    )
}

export default Orders;