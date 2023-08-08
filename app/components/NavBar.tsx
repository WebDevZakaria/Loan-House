import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Login } from "./Login"
import { Register } from "./Register"


function NavBar() {
  return (
<nav className="">

  <div className=" absolute lg:w-96 mt-2 lg:mx-[80px] flex lg:space-x-7">
  <h3 className=" hidden lg:flex  lg:mt-1"> Search</h3>
  <Input type="text" placeholder="Search For A place" className="relative top-[-15px] lg: mt-2" />
  </div>

<div className="  mx-[300px] w-[255px] lg:mx-[1000px] lg:w-[775px]">
<Menubar className="mt-2 ">
      <MenubarMenu>
        <MenubarTrigger className="lg:pl-20 hidden lg:flex ">Home</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="">Wilayat</MenubarTrigger>
        <MenubarContent>
        <Link href="/category">
<MenubarItem>
          All
          </MenubarItem></Link>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hidden lg:flex">Admin</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hidden lg:flex">Show House</MenubarTrigger>
      </MenubarMenu>


      
      <MenubarMenu>
        <MenubarTrigger className="hidden lg:flex">Profiles 
        <Avatar className = "w-[30px] h-[30px] ml-2">
      <AvatarImage  src="https://github.com/shadcn.png" alt="@shadcn"  />
      <AvatarFallback>CN</AvatarFallback>
       </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger> <Register /> </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger> <Login /> </MenubarTrigger>
     
      </MenubarMenu>
    </Menubar>
    </div>

    </nav>
  )
}

export default NavBar
