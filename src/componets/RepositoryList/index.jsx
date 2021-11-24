import {useState, useEffect} from 'react';
import { RepositoryItem } from "../RepositoryItem";
import { Row } from 'react-bootstrap';
import { Container } from "./styles";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(()=> {
    fetch('https://api.github.com/users/gustavomsb/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <Container>
      <h1 className="pb-3 pt-3">Repository List</h1>
      <Row>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository}  />
        ))}

      </Row>
    </Container>
  );
}
