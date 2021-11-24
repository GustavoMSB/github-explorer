import { Col } from 'react-bootstrap';
import { Content } from './styles';
export function RepositoryItem(props) {
  return (
      <Col md={4} xs={6}>
        <Content>
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description ?? 'Empty description'}</p>
          <a href={props.repository.html_url} target="blank">
            Access repository
          </a>
        </Content>
      </Col>
  );
}
