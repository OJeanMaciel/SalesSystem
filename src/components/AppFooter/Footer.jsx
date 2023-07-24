import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div className="Footer">
      <a href="https://github.com/OJeanMaciel" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>
        <GithubOutlined style={{ fontSize: 24, color: '#000000' }} />
      </a>
      <a href="https://www.instagram.com/jean.maciel_/" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>
        <InstagramOutlined style={{ fontSize: 24, color: '#000000' }} />
      </a>
      <a href="https://www.linkedin.com/in/jean-kevin-maciel-436805199/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
        <LinkedinOutlined style={{ fontSize: 24, color: '#000000' }} />
      </a>
    </div>
  );
}

export default Footer;
