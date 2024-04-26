import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";

export const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Flashcard", "Contect", "FQA"];
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src="/Logo.png" width={150} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src="/Logo.png" width={150} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="hidden sm:flex gap-7">
          <NavbarItem isActive>
            <Link color="foreground"  aria-current="page" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link color="foreground" href="#">
              Flashcard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contect
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              FQA
            </Link>
          </NavbarItem>
        </div>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            className="@apply bg-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] rounded-3xl px-5 py-2 text-white"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

