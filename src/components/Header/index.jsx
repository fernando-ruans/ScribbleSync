import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
        src="https://github.com/fernando-ruans.png"
        alt="Imagem do Usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Fernando Ruan</strong>
        </div>
      </Profile>
    </Container>
  );
}