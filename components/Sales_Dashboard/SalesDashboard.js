import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, Plus, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Dashboard_card from "../Dashboard_card/Dashboard_card";
import Link from "next/link";
import All_clinics from "../All_clinics/All_clinics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SalesDashboard = () => {
  return (
    <>
      <div className="h-[102px]  bg-gradient-to-r  from-[#B0A4F5] to-[#EDA197] rounded-bl-3xl rounded-br-3xl px-3 pt-12">
        <div className="flex justify-between items-center">
          <Menu color="white" width={24} />
          <Image
            src="/images/ekyamm.png"
            width={100}
            height={49}
            className="w-[106px] pt-1.5"
            alt="ekyamm"
          />
          <Avatar>
            <AvatarImage src="/images/user.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="px-3 h-screen mb-[26%] overflow-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-[12px] text-gray-500">Good morning,</span>
            <strong className="text-[14px] text-black font-[600] ps-[2px]">
              Chinten Shah
            </strong>
          </div>
          <div className="rounded-full  w-[76px] h-6 inline-block bg-gradient-to-r  from-[#B0A4F5] to-[#EDA197] p-[1px]">
            <Button
              className={
                "bg-gradient-to-r  from-[#DFDAFB] to-[#DFDAFB] text-[11px] text-gray-700 rounded-full w-full h-full flex items-center justify-center gap-1"
              }
            >
              <Plus style={{ width: "10px" }} /> Sales Rep
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-3">
          <Dashboard_card />
        </div>

        {/* Channel Partner */}
        <div className="bg-[#FFFFFF80] mt-[12.35px] pt-[8.21px] pb-3.5 border=[1.47px] border-[#FFFFFF4D] rounded-2xl">
          <div className="flex justify-between items-center ps-2 pe-[16.93px]">
            <div className="flex items-center gap-1">
              <Image
                src="/images/bx_clinic.png"
                width={24}
                height={24}
                className="w-[24px]"
                alt="ekyamm"
              />
              <span className="text-[12px] text-black font-medium">
                Channel Partner
              </span>
            </div>
            <Link href={""} className="text-[10.32px] text-gray-400">
              View All
            </Link>
          </div>
          <div className="px-[10px] ">
            <All_clinics />
          </div>
        </div>
        <div className="">
          {/* <Button
            className="mt-[10.8px] bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px] h-[45px] mx-auto"
            style={{ width: "100% !important" }}
          >
            Add User
          </Button> */}
          <Drawer className="pt-[9.97px]">
            <DrawerTrigger className="mt-[10.8px] bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px] h-[45px]  rounded-[8px] flex items-center justify-center w-full">
              Add User
            </DrawerTrigger>
            <DrawerContent className="bg-gradient-to-b  from-[#e7e4f8] via-[#f0e1df] via-70%  to-[#feedea]">
              <DrawerHeader>
                <DrawerTitle className="text-[16px] font-[600] text-center">
                  Add User
                </DrawerTitle>
                <DrawerDescription className="mt-6 flex flex-col gap-3">
                  <Link href={"/sales/cp_type"}>
                    <Button className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex  justify-between items-center w-full h-[50px]">
                      Channel Partner
                      <Image
                        src="/images/arrow.png"
                        width={24}
                        height={24}
                        className="w-[24px]"
                        alt="ekyamm"
                      />
                    </Button>
                  </Link>
                  <Link href={"/sales/ip_details"}>
                    <Button className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex  justify-between items-center w-full h-[50px]">
                      Individual Practitioner
                      <Image
                        src="/images/arrow.png"
                        width={24}
                        height={24}
                        className="w-[24px]"
                        alt="ekyamm"
                      />
                    </Button>
                  </Link>
                  <Button className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex  justify-between items-center w-full h-[50px]">
                    <Link href={""}>Clinic</Link>
                    <Image
                      src="/images/arrow.png"
                      width={24}
                      height={24}
                      className="w-[24px]"
                      alt="ekyamm"
                    />
                  </Button>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="p-0">
                {/* <Button>Submit</Button> */}
                <DrawerClose>
                  <Button
                    variant="outline"
                    className="absolute top-[10px] right-0"
                  >
                    <X className="w-2 h-2 text-black" />
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* footer */}
      <div className="footer_bar bg-[#FFFFFFB2] h-[58px] fixed bottom-0 pb-2 left-0 right-0 flex items-center">
        <Tabs defaultValue="account" className="">
          <TabsList className="w-100 bg-transparent p-0  h-[58px]">
            <TabsTrigger
              value="dashboard"
              className="active:border-t active:border-t-[#000] focus:border-t focus:border-t-[#000] active:shadow-none focus:shadow-none"
            >
              <Image
                src="/images/dashboard-icon.png"
                width={28}
                height={24}
                className="w-[28px]"
                alt="dashboard"
              />
            </TabsTrigger>
            <TabsTrigger
              value="add"
              className="active:border-t active:border-t-[#000] focus:border-t focus:border-t-[#000] active:shadow-none focus:shadow-none"
            >
              <Image
                src="/images/communication.png"
                width={28}
                height={24}
                className="w-10"
                alt="communication"
              />
            </TabsTrigger>
            <TabsTrigger
              value="search"
              className="active:border-t active:border-t-[#000] focus:border-t focus:border-t-[#000] active:shadow-none focus:shadow-none"
            >
              <Image
                src="/images/alerts.png"
                width={28}
                height={24}
                className="w-10"
                alt="alerts"
              />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default SalesDashboard;
