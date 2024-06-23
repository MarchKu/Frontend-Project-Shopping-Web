import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card } from "../ui/card";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar(props) {
  const productsCount = {};
  props.category.forEach((name) => {
    productsCount[name.category]
      ? (productsCount[name.category] += 1)
      : (productsCount[name.category] = 1);
  });
  const ArrayOfProductsCount = Object.entries(productsCount);

  return (
    <div className="w-full h-[70px] flex justify-center bg-primary">
      <div className="w-[1440px] flex justify-start">
        <ToggleGroup type="single">
          <ToggleGroupItem className="bg-secondary">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-[300px] flex justify-between ">
                Product categories <span className="text-[0.7rem]">▼</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[330px]">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {ArrayOfProductsCount.map((categoryDetail, index) => {
                  return (
                    <DropdownMenuItem key={index} className="justify-between">
                      <span>{categoryDetail[0]}</span>
                      <span>Products : ({categoryDetail[1]})</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </ToggleGroupItem>
          <Link to="/">
            <ToggleGroupItem value="">Home</ToggleGroupItem>
          </Link>
          <Link to="/">
            <ToggleGroupItem value="">Shop</ToggleGroupItem>
          </Link>
          <Link to="/">
            <ToggleGroupItem value="">Detail</ToggleGroupItem>
          </Link>
          <Link to="/">
            <ToggleGroupItem value="">Orders</ToggleGroupItem>
          </Link>
          <Link to="/">
            <ToggleGroupItem value="">Contact</ToggleGroupItem>
          </Link>
        </ToggleGroup>
      </div>
    </div>
  );
}  
export default NavBar;
