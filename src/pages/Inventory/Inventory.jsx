import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../api/api";

function Inventory() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getInventory().then(res => {
            setDataSource(res.products)
            setLoading(false)
        })

    }, []);

    return (
        <div>
            <Space size={20} direction="vertical">
                <Typography.Title level={4}>Inventário</Typography.Title>
                <Table
                loading={loading} 
                columns={[
                    {
                        title: "Thumbnail",
                        dataIndex: "thumbnail",
                        render: (link) => {
                            return <Avatar src={link} />
                        }
                    },
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
                        title: "Rating",
                        dataIndex: "rating",
                        render: (rating) => {
                            return <Rate value={rating} AllowHalf disabled/>;
                        }
                    },
                    {
                        title: "Stock",
                        dataIndex: "stock"
                    },
                    {
                        title: "Brand",
                        dataIndex: "brand"
                    },
                    {
                        title: "Category",
                        dataIndex: "category"
                    },
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

export default Inventory;