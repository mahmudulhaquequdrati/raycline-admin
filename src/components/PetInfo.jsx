import { useState } from "react";
import defaultPetImage from "../assets/pets/pets-dog.png";
import { fakeAppointment } from "../features/fakeData/appointment";
import PetInfoModal from "./petInfoModal";

const PetInfo = () => {
  const [allAppointmentList, setAllAppointmentList] = useState(fakeAppointment);
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const [searchInput, setSearchInput] = useState("");

  const filteredData = () => {
    const data = allAppointmentList?.filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.phone.includes(searchInput) ||
        item.email.includes(searchInput)
    );
    return data;
  };

  return (
    <div className="bg-primary">
      {isOpen && <PetInfoModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="max-w-[1140px] w-full mx-auto py-20 px-3 md:px-6 xl:px-0">
        <h1 className="font-bold text-3xl mb-16">Animali di Mario Rossi</h1>
        <div>
          <div>
            <div className="min-h-min overflow-x-auto bg-transparent rounded border-t-0 border">
              <table className="h-min w-full shadow bg-transparent rounded   ">
                <thead className="bg-white">
                  <tr className="bg-gray-50 px-5 ">
                    <th align="left" className=" px-5 py-5 ">
                      Nome e specie di animale
                    </th>
                    <th
                      align="left"
                      className=" px-5 py-5 whitespace-nowrap"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {(searchInput === ""
                    ? allAppointmentList
                    : filteredData()
                  )?.map((res) => (
                    <tr key={res} className="w-max">
                      <td align="left" className="border-t px-5 py-5 ">
                        <div className="flex gap-4 items-center">
                          <div className="mt-2">
                            <figure className="w-20 h-20 object-cover rounded-full overflow-hidden">
                              <img
                                className="w-full h-full rounded-full object-cover"
                                src={defaultPetImage}
                                alt=""
                              />
                            </figure>
                          </div>
                          <div>
                            <p className="text-black">{"Jack"}</p>
                            <p className="text-gray-500">{"Getto"}</p>
                          </div>
                        </div>
                      </td>
                      <td align="right" className="border-t px-5 py-3">
                        <button
                          onClick={() => openModal(res)}
                          className="border border-primary px-5 py-3 rounded text-primary whitespace-nowrap"
                        >
                          Visualizza la cartella
                        </button>
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

export default PetInfo;
