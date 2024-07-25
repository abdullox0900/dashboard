import axios from 'axios';
import React, { useState, useRef } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

export const FormPortfolio = () => {
    const [name, setName] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [viewLink, setViewLink] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('githubLink', githubLink);
        formData.append('viewLink', viewLink);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }

        console.log('Sending data:', formData);

        try {
            const response = await axios.post('http://localhost:4000/portfolio', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Server Response:', response.data);
            alert('Form submitted successfully!');
            
            // Reset form fields
            setName('');
            setGithubLink('');
            setViewLink('');
            setDescription('');
            setImage(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form.');
        }
    };

    return (
        <>
            <Breadcrumb pageName="Form Portfolio" />
            <div className="flex flex-col gap-9">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Portfolio Form
                        </h3>
                    </div>
                    <div className="p-6.5">
                        <div className="mb-4.5">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Project Title <span className="text-meta-1">*</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Project title"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-2.5 block text-black dark:text-white">
                                GitHub <span className="text-meta-1">*</span>
                            </label>
                            <input
                                name="githubLink"
                                type="text"
                                placeholder="GitHub link"
                                value={githubLink}
                                onChange={(e) => setGithubLink(e.target.value)}
                                required
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-2.5 block text-black dark:text-white">
                                View Project <span className="text-meta-1">*</span>
                            </label>
                            <input
                                name="viewLink"
                                type="text"
                                placeholder="View link (Vercel or Netlify)"
                                value={viewLink}
                                onChange={(e) => setViewLink(e.target.value)}
                                required
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-black dark:text-white">
                                Project Image
                            </label>
                            <input
                                ref={fileInputRef}
                                name="image"
                                type="file"
                                onChange={handleFileChange}
                                className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Description
                            </label>
                            <textarea
                                name="description"
                                rows={6}
                                placeholder="Type your message"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            ></textarea>
                        </div>

                        <button 
                            type="button" 
                            onClick={handleSubmit} 
                            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                        >
                            Submit Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};