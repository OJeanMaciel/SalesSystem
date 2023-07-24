import React from 'react';
import { Typography, Form, Input, Button, Select, Row, Col, notification } from 'antd';
import { register } from '../../auth/auth';

const { Title } = Typography;
const { Option } = Select;

function User() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
    const userRole = localStorage.getItem('role');
    if (userRole !== 'admin') {
      notification.error({
        message: 'Registro não permitido',
        description: 'Você não tem permissão para registrar novos usuários.',
      });
      return;
    }

    try {
      values.role = values.role.toUpperCase();
      const response = await register(values, localStorage.getItem('token'));
      console.log(response);
      if (response.status === 200) {
        notification.success({
          message: 'Registro bem-sucedido',
          description: 'Usuário registrado com sucesso!',
        });
        form.resetFields();
      }
    } catch (error) {
      notification.error({
        message: 'Erro ao registrar usuário',
        description: error.message,
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', position: 'absolute', left: '30%' }}>
      <Title level={4}>Registrar usuário</Title>
      <Row justify="center">
        <Col>
          <Form form={form} onFinish={onFinish} layout="vertical" style={{ width: '500px', margin: '0 auto' }}>
            <Form.Item
              label="Nome de usuário"
              name="login"
              rules={[{ required: true, message: 'Por favor, insira seu nome de usuário!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[{ required: true, message: 'Por favor insira sua senha!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Função"
              name="role"
              rules={[{ required: true, message: 'Por favor selecione a função!' }]}
            >
              <Select placeholder="Selecione a função" style={{ width: '100%' }}>
                <Option value="USER">Usuário</Option>
                <Option value="ADMIN">Administrador</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Registrar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default User;
