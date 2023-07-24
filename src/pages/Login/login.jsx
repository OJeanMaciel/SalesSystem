import React, { useState } from 'react';
import { Form, Input, Button, Typography, notification } from 'antd';
import { login } from '../../auth/auth';

const { Title } = Typography;

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    login(username, password)
      .then((response) => {
        const { data } = response;
        const { token } = data;
        const { login } = data;
        const { role } = data;
        onLogin({ token, login, role });
      })
      .catch((error) => {
        notification.error({
          message: 'Erro ao fazer login',
          description: error.message,
        });
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          width: '400px',
          padding: '24px',
          textAlign: 'center',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        <Title level={3} style={{ color: '#1890ff', paddingBottom: 50 }}>
          Página de Login
        </Title>
        <Form onFinish={handleSubmit} style={{ textAlign: 'right' }}>
          <Form.Item
            label="Usuário"
            name="username"
            rules={[{ required: true, message: 'Por favor, insira o usuário!' }]}
          >
            <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Por favor, insira a senha!' }]}
          >
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
