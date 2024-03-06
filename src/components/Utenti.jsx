import axios from "axios";
import { useGetAllVetListsQuery } from "../features/vetLists/vetLists";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";

const Utenti = () => {
  const {
    data: allVets,
    isLoading: allAppointmentListLoading,
    refetch,
  } = useGetAllVetListsQuery();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_LINK}/user/by/role`)
      .then((res) => {
        setUserData(res?.data?.users);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="bg-primary ">
      {/* {isOpen && <PetInfoModal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      <div className="max-w-[1140px] w-full mx-auto py-20 px-3 md:px-6 xl:px-0">
        <h1 className="font-bold text-3xl mb-16">Gestisci gli utenti</h1>
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
                      Data creazione account
                    </th>
                    <th
                      align="left"
                      className=" px-5 py-5 whitespace-nowrap"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {isLoading
                    ? "Loading...."
                    : userData?.map((res, i) => (
                        <tr
                          key={res._id}
                          className="w-max cursor-pointer"
                          onClick={() => navigate(`/petinfo/${res?._id}`)}
                        >
                          <td align="left" className="border-t px-5 py-5 ">
                            <div className="flex   ">
                              <img
                                src={res.profile_image_url}
                                className="w-16 h-16 rounded-full"
                                alt=""
                              />
                              <div className="ml-5 ">
                                <p className="font-bold">
                                  {res?.first_name} {res?.last_name}
                                </p>
                                <p className="text-gray-400">
                                  {res?.userEmail}
                                </p>
                                <p className="text-gray-400">{res?.email}</p>
                                <p className="text-gray-400">{res?.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td align="left" className="border-t px-8 py-5">
                            {moment(res?.createdAt).format(
                              "DD/MM/YYYY, hh:mm a"
                            )}
                          </td>
                          <td align="right" className="border-t px-8 py-5">
                            <span>{`>`}</span>
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

export default Utenti;
