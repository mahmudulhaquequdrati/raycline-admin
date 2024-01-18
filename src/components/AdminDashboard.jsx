/* eslint-disable no-unused-vars */
import { Popover, Transition } from "@headlessui/react";
import Pets from "../assets/pets/pets-dog.png";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
// import moment from "moment";
import axios from "axios";
import { notifySuccess } from "../components/common/Toast/Toast";
// import PetInfoModal from "../VetDashboard/PetInfoModal";
import { useGetVetAppointmentDetailsQuery } from "../features/appointment/appointmentApi";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    data: allAppointmentList,
    isLoading: allAppointmentListLoading,
    refetch,
  } = useGetVetAppointmentDetailsQuery(user?._id);
  const [isOpen, setIsOpen] = useState(false);

  const deleteAppointment = (id) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_LINK}/appointment/delete/${id}`)
      .then((res) => {
        notifySuccess("Appuntamento eliminato con successo!");
        if (res?.data?.success) {
          refetch();
        }
      });
  };

  return (
    <div className="bg-primary ">
      {/* {isOpen && <PetInfoModal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      <div className="max-w-[1140px] w-full mx-auto py-20 px-3 md:px-6 xl:px-0">
        <h1 className="font-bold text-3xl">Gestisci i veterinari</h1>
        <div className="py-5">
          <input
            className="w-full bg-white px-10 py-3 rounded outline-none"
            type="text"
            name=""
            id=""
            placeholder="Cerca per nome, cognome o email..."
          />
        </div>
        <div>
          <div className=" ">
            <div className="min-h-min bg-transparent">
              <table className="w-full  bg-transparent rounded   ">
                <thead className="bg-white">
                  <tr className="bg-gray-50 px-5 ">
                    <th align="left" className=" px-5 py-5 ">
                      Nome, cognome e email
                    </th>
                    <th align="left" className=" px-8 py-5 whitespace-nowrap">
                      Tipo di dottore
                    </th>
                    <th align="left" className=" px-5 py-5 whitespace-nowrap">
                      Stato account
                    </th>
                    {/* <th
                      align="left"
                      className="border-t px-5 py-5 whitespace-nowrap"
                    >
                      Cartella clinica dell’animale
                    </th> */}
                    <th align="left" className=" px-5 py-5 whitespace-nowrap">
                      Azioni
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {allAppointmentListLoading
                    ? "Loading...."
                    : allAppointmentList?.data?.map((res, i) => (
                        <tr key={res} className="w-max">
                          <td align="left" className="border-t px-5 py-5 ">
                            <div className="flex   ">
                              <img
                                src={Pets}
                                className="w-16 h-16 rounded-full"
                                alt=""
                              />
                              <div className="ml-5 ">
                                <p className="font-bold">
                                  {res?.firstName} {res?.lastName}
                                </p>
                                <p className="text-gray-400">
                                  {res?.userEmail}
                                </p>
                                <p className="text-gray-400">{res?.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td align="left" className="border-t px-8 py-5">
                            <p className="text-gray-400">
                              Veterinario di medicina generale Veterinari di
                              Chirurgo veterinario Animali da Compagnia
                            </p>
                          </td>
                          <td align="left" className="border-t px-5 py-5">
                            {i === 0 ? (
                              <button className="bg-[#fff6dd] text-yellow-500 px-4 py-1.5 rounded-full">
                                In Attesa
                              </button>
                            ) : i === 1 ? (
                              <button className="bg-[#fee6de] text-red-500 px-4 py-1.5 rounded-full">
                                Disabilitato
                              </button>
                            ) : (
                              <button className="bg-[#e9fedf] text-green-500 px-4 py-1.5 rounded-full">
                                Attivo
                              </button>
                            )}
                          </td>
                          {/* <td align="left" className="border-t px-5 py-3">
                            <div className="flex justify-between gap-12 !border px-5 py-3 rounded">
                              <div>
                                <p>Rex</p>
                                <p className="text-gray-400">Cane</p>
                              </div>
                              <div>
                                <button
                                  onClick={() => openModal()}
                                  className="border border-primary px-5 py-3 rounded text-primary whitespace-nowrap"
                                >
                                  Visualizza la cartella
                                </button>
                              </div>
                            </div>
                          </td> */}
                          <td align="left" className="border-t px-5 py-2">
                            <Popover className="relative !z-[99999] ">
                              {({ open }) => (
                                <>
                                  <Popover.Button
                                    className={
                                      "cursor-pointer  group inline-flex items-center rounded-md px-3 py-2 text-base font-medium  focus:outline-none "
                                    }
                                  >
                                    <div className=" ">
                                      <svg
                                        className="w-6 h-6 text-gray-800"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 17 4"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeWidth="2"
                                          d="M2.49 2h.01m6 0h.01m5.99 0h.01"
                                        />
                                      </svg>
                                    </div>
                                  </Popover.Button>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                  >
                                    <Popover.Panel className="absolute -left-[100%] !z-[99999] mt-3 w-[200px] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                        <div className="relative bg-white p-5 cursor-pointer ">
                                          <p className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                            <div className="ml-4">
                                              <p className="text-sm font-medium text-gray-900">
                                                Attiva
                                              </p>
                                            </div>
                                          </p>
                                        </div>
                                        <div
                                          onClick={() =>
                                            deleteAppointment(res?._id)
                                          }
                                          className="relative bg-white p-5  cursor-pointer"
                                        >
                                          <p className="-m-3 flex  items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                            <div className="ml-4">
                                              <p className="text-sm font-medium text-red-400">
                                                Rifiuta
                                              </p>
                                            </div>
                                          </p>
                                        </div>
                                        <div className="relative bg-white p-5  cursor-pointer">
                                          <p className="-m-3 flex  items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                            <div className="ml-4">
                                              <p className="text-sm font-medium text-red-400">
                                                Disabilita
                                              </p>
                                            </div>
                                          </p>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
