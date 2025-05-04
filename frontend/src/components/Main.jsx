import React, { useContext } from "react";

import { ListContext } from "../contexts/list";
import { Task } from "./Task";

//icons
import { MdOutlineAddCircle } from "react-icons/md";
import Modal from "./Modal";

export function Main() {
  const { list } = useContext(ListContext);

  return (
    <div
      id="containerApp"
      className="rounded-t-4xl bg-white mt-[-30px]  min-h-[60dvh] py-7 flex flex-wrap w-full px-7 gap-7 max-sm:justify-center"
    >
      <button
        type="button"
        className="py-2.5 px-5 mt-7 font-medium bg-gray-100 text-primary focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-primary-200 focus:z-10 focus:ring-4 focus:ring-gray-100 w-sm h-[300px] flex justify-center items-center text-8xl cursor-pointer"
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
      >
        <MdOutlineAddCircle />
      </button>
      {list.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.description}
          checked={item.status}
        />
      ))}

      <Modal />
    </div>
  );
}
