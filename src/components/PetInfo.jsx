import { useEffect, useState } from "react";
import defaultPetImage from "../assets/pets/pets-dog.png";
import PetInfoModal from "./petInfoModal";
import axios from "axios";
import { useParams } from "react-router-dom";

const PetInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [singlePetData, setSinglePetData] = useState({});
  function openModal(data) {
    setIsOpen(true);
    setSinglePetData(data);
  }

  const { id } = useParams();
  const [animalData, setPetInfoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_LINK}/pets/report/byuser/${id}`)
      .then((res) => {
        setPetInfoData(res?.data?.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-primary">
      {isOpen && (
        <PetInfoModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={singlePetData}
        />
      )}
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
                  {animalData?.map((petInfo) =>
                    petInfo?.data?.map((res) => (
                      <tr key={res} className="w-max">
                        <td align="left" className="border-t px-5 py-5 ">
                          <div className="flex gap-4 items-center">
                            <div className="mt-2">
                              <figure className="w-20 h-20 object-cover rounded-full overflow-hidden">
                                <img
                                  className="w-full h-full rounded-full object-cover"
                                  src={
                                    res?.general_information?.pet_photo ||
                                    defaultPetImage
                                  }
                                  alt=""
                                />
                              </figure>
                            </div>
                            <div>
                              <p className="text-black">
                                {res?.general_information?.animal_name}
                              </p>
                              <p className="text-gray-500">
                                {res?.general_information?.species}
                              </p>
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
                    ))
                  )}
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
