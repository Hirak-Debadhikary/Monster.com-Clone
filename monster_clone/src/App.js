import "./App.css";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
// import Carousel from "react-elastic-carousel";
// import Card from "./Card";
// import { Box } from "@chakra-ui/react";
function App() {
  // const breakPoint = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 500, itemsToShow: 2 },
  //   { width: 765, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 5 },
  // ];
  return (
    <div className="App">
      <Navbar />
      <HomePage />

      {/* <Box>
        <div className="card">
          <Carousel breakPoint={breakPoint}>
            <Card number="Image 1" />
            <Card number="Image 2" />
            <Card number="Image 3" />
            <Card number="Image 4" />
            <Card number="Image 5" />
            <Card number="Image 6" />
            <Card number="Image 7" />
            <Card number="Image 8" />
            <Card number="Image 9" />
            <Card number="Image 10" />
          </Carousel>
        </div>
      </Box> */}
    </div>
  );
}

export default App;
