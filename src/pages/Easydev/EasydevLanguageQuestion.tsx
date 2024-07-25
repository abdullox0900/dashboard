import { useState } from "react"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import useCRUD from "../../hooks/useCRUD"
import useFetchData from "../../hooks/useFetchData"
import SelectGroupTwo from "../../components/Forms/SelectGroup/SelectGroupTwo"
import MultiSelect from "../../components/Forms/MultiSelect"

interface InputData {
    title: string;
    link: string;
}

export const EasydevLanguageQuestion = () => {

    const [languageName, setLanguageName] = useState<string>()

    const [inputs, setInputs] = useState<InputData[]>([{ title: '', link: '' }]);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const values = [...inputs];
      values[index][event.target.name as keyof InputData] = event.target.value;
      setInputs(values);
    };
  
    const handleAddInput = () => {
      setInputs([...inputs, { title: '', link: '' }]);
    };
  
    const handleRemoveInput = (index: number) => {
      const values = [...inputs];
      values.splice(index, 1);
      setInputs(values);
    };

    const { data, refetch } = useFetchData(`${'http://localhost:4000/'}programming-languages`)
    const { deleteData, postData, postLoading } = useCRUD(`${'http://localhost:4000/'}programming-languages`)

    async function sendData() {
        try {
            await postData({ title: languageName }).finally(() => {
                setLanguageName('')
            })
            await refetch();
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await deleteData(id);
            await refetch(); // Data yangilanishi uchun refetch
        } catch (error) {
            console.error(error);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendData();
        }
    };

    console.log(data);


    return (
        <div>
            <Breadcrumb pageName="Form Question" />
            {/* General Loader */}
            <div className="grid grid-cols-2 gap-[20px]">
                <div className="h-min rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Add Question
                        </h3>
                    </div>
                    <div className="p-6.5">
                        <div className="mb-4.5">
                            <SelectGroupTwo label="Language" options={data} />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Question title
                            </label>
                            <input
                                type="text"
                                placeholder="Title"
                                value={languageName}
                                onChange={(e) => setLanguageName(e.target.value)}
                                required
                                onKeyDown={handleKeyDown}
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            {/* <SelectGroupTwo /> */}
                        </div>
                        <div className="mb-4.5">
                            <MultiSelect id="multiSelect" />
                        </div>
                        <div className="mb-4.5">
                            {inputs.map((input, index) => (
                                <div key={index} className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Question title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={input.title}
                                        onChange={(event) => handleChange(index, event)}
                                        className="w-full mb-3 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        placeholder="Title"
                                    />
                                    <input
                                        type="text"
                                        name="link"
                                        value={input.link}
                                        onChange={(event) => handleChange(index, event)}
                                        className="w-full rounded mb-4.5 border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        placeholder="Link"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveInput(index)}
                                        className="mt-2.5 bg-red-500 text-white py-2 px-4 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddInput}
                                className="mt-1 bg-green-500 text-white py-2 px-4 rounded"
                            >
                                Add Input
                            </button>
                        </div>
                        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90" onClick={sendData}>
                            Send
                        </button>
                    </div>
                </div>
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Programming Language List
                        </h3>
                    </div>
                    <ul className="p-6.5">
                        {
                            // data?.map((item: ProgrammingLangInner) => {
                            //     return (
                            //         <li className="flex justify-between py-4 border-b border-stroke dark:border-strokedark dark:bg-boxdark">
                            //             <span className="text-black  dark:text-white">{item.title}</span>
                            //             <button onClick={() => handleDelete(item._id)}>
                            //                 <svg className="fill-red-500 " width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z" fill=""></path><path d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z" fill=""></path><path d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z" fill=""></path><path d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z" fill=""></path></svg>
                            //             </button>
                            //         </li>
                            //     )
                            // })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
