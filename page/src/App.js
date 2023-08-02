import "./App.css";
import Header from "./components/Header";
import WeatherPage from "./page/weather";
import Container from "@mui/material/Container";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apolloClient";
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Container maxWidth="lg">
          <div className="weather-bg"></div>
          <WeatherPage />
        </Container>
      </div>
    </ApolloProvider>
  );
};

export default App;
