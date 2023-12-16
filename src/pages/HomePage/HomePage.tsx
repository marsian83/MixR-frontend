import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import useFetch from "../../hooks/useFetch";
import useModal from "../../hooks/useModal";
import useClickOutside from "../../hooks/useClickOutside";
import DataForm from "../../common/DataForm";
import Dropdown from "../../common/Dropdown";
import Icon from "../../common/Icon";

export default function HomePage() {
  const modal = useModal();

  return (
    <>
      <div className="p-20">
        <button
          onClick={() => {
            modal.show(<OpenModal />);
          }}
        >
          show modal
        </button>
      </div>
    </>
  );
}

function OpenModal() {
  const modal = useModal();

  return (
    <div className="bg-white px-10 py-5 text-black rounded-lg w-[20vw]">
      <button
        className="m-5 bg-red-500 text-white px-6 py-2 rounded-md"
        onClick={modal.hide}
      >
        close
      </button>

      <DataForm.Container
        className=""
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        <DataForm.Input
          name="email"
          type="email"
          placeholder="email"
          required
          className="bg-transparent border"
        />
        <div className="flex">
          <Icon icon="arrow_forward" />
          <DataForm.Input
            name="pass"
            type="password"
            required
            placeholder="pass"
            className="bg-transparent border"
          />
        </div>
        <DataForm.Input name="note" className="bg-transparent border" />

        <Dropdown.Container name="who">
          <Dropdown.Option>hum</Dropdown.Option>
          <Dropdown.Option>tum</Dropdown.Option>
          <Dropdown.Option>koi nai</Dropdown.Option>
        </Dropdown.Container>

        <DataForm.Input
          type="submit"
          value="submit kar do"
          className="cursor-pointer"
        />
      </DataForm.Container>
    </div>
  );
}
