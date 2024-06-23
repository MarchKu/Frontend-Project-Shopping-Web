import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header className="w-full h-[30%] flex flex-col items-center gap-4">
      {/* <img src="../src/img/logo.png" /> */}
      <div className="w-full h-[2rem] bg-secondary flex justify-center">
        <div className="w-[1440px] h-full flex justify-start">
          <ToggleGroup type="single" className="h-[1.5rem]">
            <Link to="/"><ToggleGroupItem value="About">About</ToggleGroupItem></Link>
            <Link to="/"><ToggleGroupItem value="Contact">Contact</ToggleGroupItem></Link>
            <Link to="/"><ToggleGroupItem value="Help">Help</ToggleGroupItem></Link>
            <Link to="/"><ToggleGroupItem value="FAQs">FAQs</ToggleGroupItem></Link>
          </ToggleGroup>
        </div>
      </div>
      <div className="w-full max-w-[1440px] h-[70px] flex flex-row justify-between">
        <Link to="/" className="w-">
          <img src="./src/img/logo.png" className="h-full" />
        </Link>
        <div className="flex items-center w-[40%] h-full space-x-2">
          <Input
            type="text"
            placeholder="What do you want to buy today?"
            className="h-[60%]"
          />
          <Button type="submit" className="h-[60%]">
            Search
          </Button>
        </div>
        <div className="flex flex-col justify-center w-[10%] h-full ">
          <p className="text-right">Customer Service </p>
          <p className="text-right">+012 345 6789</p>
          <div className="flex flex-row w-[100%] justify-end gap-2 ">
            <Link to="/">
              <img src="./src/img/facebook.svg" className="h-[1.5rem]" />
            </Link>
            <Link to="/">
              <img src="./src/img/instagram.svg" className="h-[1.5rem]" />
            </Link>
            <Link to="/">
              <img src="./src/img/line.svg" className="h-[1.5rem]" />
            </Link>
          </div>
        </div>
      </div>
      <NavBar category={props.category}/>
    </header>
  );
}
export default Header;
