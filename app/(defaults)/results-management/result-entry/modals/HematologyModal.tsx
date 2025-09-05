'use client';

import { createLaboratoryHemotology } from '@/api/services/laboratoryresult.api';
import {
    getHGBRange,
    getHGTRange,
    getLYMRange,
    getMCHCRange,
    getMCHRange,
    getMONRange,
    getMVCRange,
    getPLTRange,
    getRBCRange,
    getRDWRange,
    getSEGRange,
    getWBCRange,
} from '@/app/(defaults)/results-management/result-entry/utils/referenceRanges';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconEye from '@/components/icon/icon-eye';
import IconHome from '@/components/icon/icon-home';
import IconPencil from '@/components/icon/icon-pencil';
import IconPhone from '@/components/icon/icon-phone';
import IconUser from '@/components/icon/icon-user';
import { BaseResponseType } from '@/types/BaseResponse';
import { GetAllLabResultWithClientDTO } from '@/types/DTO/Laboratoryresult.dto';
import { Dialog, Transition, DialogPanel, TransitionChild, Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { Fragment, useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    record: GetAllLabResultWithClientDTO | null;
}

export default function HematologyModal({ isOpen, onClose, record }: CustomModalProps) {
    const [active, setActive] = useState<string>('1');
    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (record?.gender === 'Male') {
            setEsrRange('0 ~ 15');
        } else {
            setEsrRange('0 ~ 20');
        }
    }, [record]);
    const [whiteBloodCellsResult, setWhiteBloodCellsResult] = useState('');
    const [whiteBloodCellsUnit, setWhiteBloodCellsUnit] = useState('10^9/L');
    const [whiteBloodCellsRange, setWhiteBloodCellsRange] = useState('4.00~10.50');
    const [redBloodCellsResult, setRedBloodCellsResult] = useState('');
    const [redBloodCellsUnit, setRedBloodCellsUnit] = useState('10^12/L');
    const [redBloodCellsRange, setRedBloodCellsRange] = useState('4.20~5.40');

    const [hemoglobinResult, setHemoglobinResult] = useState('');
    const [hemoglobinUnit, setHemoglobinUnit] = useState('g/L');
    const [hemoglobinRange, setHemoglobinRange] = useState('125~160');

    const [HematocritResult, setHematocritResult] = useState('');
    const [HematocritUnit, setHematocritUnit] = useState('N/A');
    const [HematocritRange, setHematocritRange] = useState('0.37~0.47');

    const [CorpusVolumeResult, setCorpusVolumeResult] = useState('');
    const [CorpusVolumeUnit, setCorpusVolumeUnit] = useState('fL');
    const [CorpusVolumeRange, setCorpusVolumeRange] = useState('78~100');

    const [CorpusHbResult, setCorpusHbResult] = useState('');
    const [CorpusHbUnit, setCorpusHbUnit] = useState('pg');
    const [CorpusHbRange, setCorpusHbRange] = useState('27~31');

    const [CorpusHbConcResult, setCorpusHbConcResult] = useState('');
    const [CorpusHbConcUnit, setCorpusHbConcUnit] = useState('N/A');
    const [CorpusHbConcRange, setCorpusHbConcRange] = useState('0.32~0.36');

    const [RBCResult, setRBCResult] = useState('');
    const [RBCUnit, setRBCUnit] = useState('%');
    const [RBCRange, setRBCRange] = useState('11.0~16.0');

    const [plateletResult, setPlateletResult] = useState('');
    const [plateletUnit, setPlateletUnit] = useState('10^9/L');
    const [plateletRange, setPlateletRange] = useState('150~450');

    const [segmentersResult, setSegmentersResult] = useState('');
    const [segmentersUnit, setSegmentersUnit] = useState('%');
    const [segmentersRange, setSegmentersRange] = useState('50.0~70.0');

    const [lymphocytesResult, setLymphocytesResult] = useState('');
    const [lymphocytesUnit, setLymphocytesUnit] = useState('%');
    const [lymphocytesRange, setLymphocytesRange] = useState('18.0~42.0');

    const [monocytesResult, setMonocytesResult] = useState('');
    const [monocytesUnit, setMonocytesUnit] = useState('%');
    const [monocytesRange, setMonocytesRange] = useState('2.0~11.0');

    const [EosinophilsResult, setEosinophilsResult] = useState('');
    const [EosinophilsUnit, setEosinophilsUnit] = useState('%');
    const [EosinophilsRange, setEosinophilsRange] = useState('0.0~6.0');

    const [basophilsResult, setBasophilsResult] = useState('');
    const [basophilsUnit, setBasophilsUnit] = useState('%');
    const [basophilsRange, setBasophilsRange] = useState('0.0~2.0');

    const [bandResult, setBandResult] = useState('');
    const [bandUnit, setBandUnit] = useState('%');
    const [bandRange, setBandRange] = useState('0.0~5.0');

    const [metamyelocytesResult, setMetamyelocytesResult] = useState('');
    const [metamyelocytesUnit, setMetamyelocytesUnit] = useState('%');
    const [metamyelocytesRange, setMetamyelocytesRange] = useState('0 ~ 1');

    const [myelocytesResult, setMyelocytesResult] = useState('');
    const [myelocytesUnit, setMyelocytesUnit] = useState('%');
    const [myelocytesRange, setMyelocytesRange] = useState('0 ~ 1');

    const [promyelocytesResult, setPromyelocytesResult] = useState('');
    const [promyelocytesUnit, setPromyelocytesUnit] = useState('%');
    const [promyelocytesRange, setPromyelocytesRange] = useState('0 ~ 1');

    const [blastCellsResult, setBlastCellsResult] = useState('');
    const [blastCellsUnit, setBlastCellsUnit] = useState('%');
    const [blastCellsRange, setBlastCellsRange] = useState('0');

    const [clottingTimeResult, setClottingTimeResult] = useState('');
    const [clottingTimeRange, setClottingTimeRange] = useState('3 to 6 minutes');

    const [bleedingTimeResult, setBleedingTimeResult] = useState('');
    const [bleedingTimeRange, setBleedingTimeRange] = useState('1 to 3 minutes');

    const [esrResult, setEsrResult] = useState('');
    const [esrUnit, setEsrUnit] = useState('mm/hr');
    const [esrRange, setEsrRange] = useState('');

    const [bloodTypeResult, setBloodTypeResult] = useState('');
    const [bloodTypeUnit, setBloodTypeUnit] = useState('');
    useEffect(() => {
        if (record?.dateOfBirth && record?.gender) {
            const genderStr = record.gender.toUpperCase();
            if (genderStr === 'MALE' || genderStr === 'FEMALE') {
                const dob = record.dateOfBirth;

                setWhiteBloodCellsRange(getWBCRange(dob, genderStr));
                setRedBloodCellsRange(getRBCRange(dob, genderStr));
                setHemoglobinRange(getHGBRange(dob, genderStr));
                setHematocritRange(getHGTRange(dob, genderStr));
                setCorpusVolumeRange(getMVCRange(dob, genderStr));
                setCorpusHbRange(getMCHRange(dob, genderStr));
                setCorpusHbConcRange(getMCHCRange(dob, genderStr));
                setRBCRange(getRDWRange(dob, genderStr));
                setPlateletRange(getPLTRange(dob, genderStr));
                setSegmentersRange(getSEGRange(dob, genderStr));
                setLymphocytesRange(getLYMRange(dob, genderStr));
                setMonocytesRange(getMONRange(dob, genderStr));
            }
        }
    }, [record]);
    const [totalPercentage, setTotalPercentage] = useState(0);
    useEffect(() => {
        const total =
            parseFloat(segmentersResult || '0') +
            parseFloat(lymphocytesResult || '0') +
            parseFloat(monocytesResult || '0') +
            parseFloat(EosinophilsResult || '0') +
            parseFloat(basophilsResult || '0') +
            parseFloat(bandResult || '0') +
            parseFloat(metamyelocytesResult || '0') +
            parseFloat(myelocytesResult || '0') +
            parseFloat(promyelocytesResult || '0') +
            parseFloat(blastCellsResult || '0');

        setTotalPercentage(total);
    }, [segmentersResult, lymphocytesResult, monocytesResult, EosinophilsResult, basophilsResult, bandResult, metamyelocytesResult, myelocytesResult, promyelocytesResult, blastCellsResult]);

    const { mutate } = useMutation({
        mutationFn: createLaboratoryHemotology,
        onSuccess: async (res) => {
            const data = res as BaseResponseType<number>;
            if (data.isSuccess) {
                alert('save hema');
            }
            ClearData();
        },
        onError: (err: AxiosError) => {
            alert(`${err.message}`);
        },
    });

    const onSubmit = () => {
        if (!record?.id) {
            alert('Missing client or package ID.');
            return;
        }
        // if (totalPercentage !== 100) {
        //   toast.error("Total percentage of differential count must equal 100.");
        //   return;
        // }
        mutate({
            Id: record?.id || 0,
            userId: Cookies.get('userid') || '',
            clientId: record?.clientId || 0,
            hematology: {
                createdById: Cookies.get('userid') || '',
                whiteBloodCellsResults: whiteBloodCellsResult,
                whiteBloodUnit: whiteBloodCellsUnit,
                whiteBloodRange: whiteBloodCellsRange,
                redBloodCellsResults: redBloodCellsResult,
                redBloodUnit: redBloodCellsUnit,
                redBloodRange: redBloodCellsRange,
                hemoglobinResults: hemoglobinResult,
                hemoglobinUnit: hemoglobinUnit,
                hemoglobinRange: hemoglobinRange,
                hematocritResult: HematocritResult,
                hematocritUnit: HematocritUnit,
                hematocritRange: HematocritRange,
                meanCorpuscularVolumeResult: CorpusVolumeResult,
                meanCorpuscularVolumeUnit: CorpusVolumeUnit,
                meanCorpuscularVolumeRange: CorpusVolumeRange,
                meanCorpuscularHbResult: CorpusHbResult,
                meanCorpuscularHbUnit: CorpusHbUnit,
                meanCorpuscularHbRange: CorpusHbRange,
                meanCorpuscularHbConcResult: CorpusHbConcResult,
                meanCorpuscularHbConcUnit: CorpusHbConcUnit,
                meanCorpuscularHbConcRange: CorpusHbConcRange,
                rbcDistributionWidthResult: RBCResult,
                rbcDistributionWidthUnit: RBCUnit,
                rbcDistributionWidthRange: RBCRange,
                plateletCountResult: plateletResult,
                plateletCountUnit: plateletUnit,
                plateletCountRange: plateletRange,
                segmentersNeutrophilsResult: segmentersResult,
                segmentersNeutrophilsUnit: segmentersUnit,
                segmentersNeutrophilsRange: segmentersRange,
                lymphocytesResult: lymphocytesResult,
                lymphocytesUnit: lymphocytesUnit,
                lymphocytesRange: lymphocytesRange,
                monocytesResult: monocytesResult,
                monocytesUnit: monocytesUnit,
                monocytesRange: monocytesRange,
                eosinophlisResult: EosinophilsResult,
                eosinophlisUnit: EosinophilsUnit,
                eosinophlisRange: EosinophilsRange,
                basophilsResult: basophilsResult,
                basophilsUnit: basophilsUnit,
                basophilsRange: basophilsRange,
                bandsResult: bandResult,
                bandsUnit: bandUnit,
                bandsRange: bandRange,
                metamyelocytesResult: metamyelocytesResult,
                metamyelocytesUnit: metamyelocytesUnit,
                metamyelocytesRange: metamyelocytesRange,
                myelocytesResult: myelocytesResult,
                myelocytesUnit: myelocytesUnit,
                myelocytesRange: myelocytesRange,
                promyelocytesResult: promyelocytesResult,
                promyelocytesUnit: promyelocytesUnit,
                promyelocytesRange: promyelocytesRange,
                blastCellsResult: blastCellsResult,
                blastCellsUnit: blastCellsUnit,
                blastCellsRange: blastCellsRange,
                absoluteSegNeutroCountResult: '',
                absoluteSegNeutroCountUnit: '',
                absoluteSegNeutroCountRange: '',
                absoluteLymphocyteCountResult: '',
                absoluteLymphocyteCountUnit: '',
                absoluteLymphocyteCountRange: '',
                absoluteMonocyteCountResult: '',
                absoluteMonocyteCountUnit: '',
                absoluteMonocyteCountRange: '',
                absoluteEosinophilCountResult: '',
                absoluteEosinophilCountUnit: '',
                absoluteEosinophilCountRange: '',
                absoluteBasophilCountResult: '',
                absoluteBasophilCountUnit: '',
                absoluteBasophilCountRange: '',
                absoluteBandCountResult: '',
                absoluteBandCountUnit: '',
                absoluteBandCountRange: '',
                clottingTimeResult: clottingTimeResult,
                clottingTimeRange: clottingTimeRange,
                bleedingTimeResult: bleedingTimeResult,
                bleedingTimeRange: bleedingTimeRange,
                esrResult: esrResult,
                esrUnit: esrUnit,
                esrRange: esrRange,
                bloodTypeResult: bloodTypeResult,
                posNegBloodType: bloodTypeUnit,
            },
        });
    };

    const ClearData = () => {
        setWhiteBloodCellsResult('');
        setRedBloodCellsResult('');
        setHemoglobinResult('');
        setHematocritResult('');
        setCorpusVolumeResult('');
        setCorpusHbResult('');
        setCorpusHbConcResult('');
        setRBCResult('');
        setPlateletResult('');
        setSegmentersResult('');
        setLymphocytesResult('');
        setMonocytesResult('');
        setEosinophilsResult('');
        setBasophilsResult('');
        setBandResult('');
    };

    if (!isOpen || !record) return null;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" open={isOpen} onClose={onClose}>
                {/* Overlay */}
                <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-[black]/60 z-[999]" />
                </TransitionChild>

                {/* Modal content */}
                <div className="fixed inset-0 z-[1000] overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 ">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel as="div" className={`panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-6xl my-8 text-black dark:text-white-dark`}>
                                {/* Header */}
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">
                                        {record.hemaId === 0 ? (
                                            <div>
                                                Hematology Result Entry For -{' '}
                                                <span className="text-green-500">
                                                    {record.firstName} {record.lastName}
                                                </span>
                                            </div>
                                        ) : (
                                            'Edit Hematology Laboratory Result Entry'
                                        )}
                                    </h5>
                                    <button type="button" className="text-white-dark hover:text-dark" onClick={onClose}>
                                        ✕
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="p-5">
                                    {isMounted && (
                                        <Tab.Group>
                                            <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''}
                                                    -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary`}
                                                        >
                                                            <IconPencil className="ltr:mr-2 rtl:ml-2" />
                                                            Result Entry
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''}
                                                -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary`}
                                                        >
                                                            <IconEye className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                                                            View Result
                                                        </button>
                                                    )}
                                                </Tab>
                                            </Tab.List>
                                            <Tab.Panels>
                                                <Tab.Panel>
                                                    <div className="mb-5 mt-2">
                                                        <div className="space-y-2 font-semibold">
                                                            <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                                                <button
                                                                    type="button"
                                                                    className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active === '1' ? '!text-primary' : ''}`}
                                                                    onClick={() => togglePara('1')}
                                                                >
                                                                    Complete Blood Count (CBC)
                                                                    <div className={`ltr:ml-auto rtl:mr-auto ${active === '1' ? 'rotate-180' : ''}`}>
                                                                        <IconCaretDown />
                                                                    </div>
                                                                </button>
                                                                <div>
                                                                    <AnimateHeight duration={300} height={active === '1' ? 'auto' : 0}>
                                                                        <div className="p-2 grid grid-cols-1 lg:grid-cols-4">
                                                                            <h2 className="font-bold text-center text-white bg-blue-500 p-1 rounded-tl-xl">
                                                                                <span className="ml-2">TEST</span>
                                                                            </h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1">Result</h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1">Unit</h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1 rounded-tr-xl">Reference Range</h2>
                                                                        </div>
                                                                        <div className="p-2 grid grid-cols-1 lg:grid-cols-4 gap-4">
                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">White Blood Cells</h2>
                                                                            <div className="flex justify-center items-center">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={whiteBloodCellsResult}
                                                                                    onChange={(e) => {
                                                                                        setWhiteBloodCellsResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={whiteBloodCellsUnit}
                                                                                    onChange={(e) => {
                                                                                        setWhiteBloodCellsUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={whiteBloodCellsRange}
                                                                                    onChange={(e) => {
                                                                                        setWhiteBloodCellsRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Red Blood Cells</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={redBloodCellsResult}
                                                                                    onChange={(e) => {
                                                                                        setRedBloodCellsResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={redBloodCellsUnit}
                                                                                    onChange={(e) => {
                                                                                        setRedBloodCellsUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={redBloodCellsRange}
                                                                                    onChange={(e) => {
                                                                                        setRedBloodCellsRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Hemoglobin</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={hemoglobinResult}
                                                                                    onChange={(e) => {
                                                                                        setHemoglobinResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={hemoglobinUnit}
                                                                                    onChange={(e) => {
                                                                                        setHemoglobinUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={hemoglobinRange}
                                                                                    onChange={(e) => {
                                                                                        setHemoglobinRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Hematocrit</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={HematocritResult}
                                                                                    onChange={(e) => {
                                                                                        setHematocritResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={HematocritUnit}
                                                                                    onChange={(e) => {
                                                                                        setHematocritUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={HematocritRange}
                                                                                    onChange={(e) => {
                                                                                        setHematocritRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <div className="col-span-4">
                                                                                <h2 className="text-sm mt-5 mb-5 w-[70%] font-bold text-lg">RED CELLS INDICES</h2>
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Mean Corpuscular Volume</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusVolumeResult}
                                                                                    onChange={(e) => {
                                                                                        setCorpusVolumeResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusVolumeUnit}
                                                                                    onChange={(e) => {
                                                                                        setCorpusVolumeUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusVolumeRange}
                                                                                    onChange={(e) => {
                                                                                        setCorpusVolumeRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Mean Corpuscular Hb</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusHbResult}
                                                                                    onChange={(e) => {
                                                                                        setCorpusHbResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusHbUnit}
                                                                                    onChange={(e) => {
                                                                                        setCorpusHbUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusHbRange}
                                                                                    onChange={(e) => {
                                                                                        setCorpusHbRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Mean Corpuscular Hb Conc.</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusHbConcResult}
                                                                                    onChange={(e) => {
                                                                                        setCorpusHbConcResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusHbConcUnit}
                                                                                    onChange={(e) => {
                                                                                        setCorpusHbConcUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={CorpusHbConcRange}
                                                                                    onChange={(e) => {
                                                                                        setCorpusHbConcRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">RBC Distribution Width</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={RBCResult}
                                                                                    onChange={(e) => {
                                                                                        setRBCResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={RBCUnit}
                                                                                    onChange={(e) => {
                                                                                        setRBCUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={RBCRange}
                                                                                    onChange={(e) => {
                                                                                        setRBCRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Platelet Count</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={plateletResult}
                                                                                    onChange={(e) => {
                                                                                        setPlateletResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={plateletUnit}
                                                                                    onChange={(e) => {
                                                                                        setPlateletUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={plateletRange}
                                                                                    onChange={(e) => {
                                                                                        setPlateletRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <div className="col-span-4">
                                                                                <h2 className="text-sm mt-5 mb-5 w-[70%] font-bold text-lg">DIFFERENTIAL COUNT</h2>
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Nuetrophils</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={segmentersResult}
                                                                                    onChange={(e) => {
                                                                                        setSegmentersResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={segmentersUnit}
                                                                                    onChange={(e) => {
                                                                                        setSegmentersUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={segmentersRange}
                                                                                    onChange={(e) => {
                                                                                        setSegmentersRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Lymphocytes</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={lymphocytesResult}
                                                                                    onChange={(e) => {
                                                                                        setLymphocytesResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={lymphocytesUnit}
                                                                                    onChange={(e) => {
                                                                                        setLymphocytesUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={lymphocytesRange}
                                                                                    onChange={(e) => {
                                                                                        setLymphocytesRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Monocytes</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={monocytesResult}
                                                                                    onChange={(e) => {
                                                                                        setMonocytesResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={monocytesUnit}
                                                                                    onChange={(e) => {
                                                                                        setMonocytesUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={monocytesRange}
                                                                                    onChange={(e) => {
                                                                                        setMonocytesRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Eosinophils</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={EosinophilsResult}
                                                                                    onChange={(e) => {
                                                                                        setEosinophilsResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={EosinophilsUnit}
                                                                                    onChange={(e) => {
                                                                                        setEosinophilsUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={EosinophilsRange}
                                                                                    onChange={(e) => {
                                                                                        setEosinophilsRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Basophils</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={basophilsResult}
                                                                                    onChange={(e) => {
                                                                                        setBasophilsResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={basophilsUnit}
                                                                                    onChange={(e) => {
                                                                                        setBasophilsUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={basophilsRange}
                                                                                    onChange={(e) => {
                                                                                        setBasophilsRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Bands</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={bandResult}
                                                                                    onChange={(e) => {
                                                                                        setBandResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={bandUnit}
                                                                                    onChange={(e) => {
                                                                                        setBandUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={bandRange}
                                                                                    onChange={(e) => {
                                                                                        setBandRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Metamyelocytes</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={metamyelocytesResult}
                                                                                    onChange={(e) => {
                                                                                        setMetamyelocytesResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={metamyelocytesUnit}
                                                                                    onChange={(e) => {
                                                                                        setMetamyelocytesUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={metamyelocytesRange}
                                                                                    onChange={(e) => {
                                                                                        setMetamyelocytesRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Myelocytes</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={myelocytesResult}
                                                                                    onChange={(e) => {
                                                                                        setMyelocytesResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={myelocytesUnit}
                                                                                    onChange={(e) => {
                                                                                        setMyelocytesUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={myelocytesRange}
                                                                                    onChange={(e) => {
                                                                                        setMyelocytesRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Promyelocytes</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={promyelocytesResult}
                                                                                    onChange={(e) => {
                                                                                        setPromyelocytesResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={promyelocytesUnit}
                                                                                    onChange={(e) => {
                                                                                        setPromyelocytesUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={promyelocytesRange}
                                                                                    onChange={(e) => {
                                                                                        setPromyelocytesRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Blast Cells</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={blastCellsResult}
                                                                                    onChange={(e) => {
                                                                                        setBlastCellsResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={blastCellsUnit}
                                                                                    onChange={(e) => {
                                                                                        setBlastCellsUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={blastCellsRange}
                                                                                    onChange={(e) => {
                                                                                        setBlastCellsRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Total</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input className="form-input ltr:rounded-l-none rtl:rounded-r-none" value={totalPercentage} disabled />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2"></div>
                                                                            <div className="flex justify-center items-center mt-2"></div>
                                                                        </div>
                                                                    </AnimateHeight>
                                                                </div>
                                                            </div>
                                                            <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                                                <button
                                                                    type="button"
                                                                    className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active === '2' ? '!text-primary' : ''}`}
                                                                    onClick={() => togglePara('2')}
                                                                >
                                                                    Bleeding-Clotting Time (CTBT)
                                                                    <div className={`ltr:ml-auto rtl:mr-auto ${active === '2' ? 'rotate-180' : ''}`}>
                                                                        <IconCaretDown />
                                                                    </div>
                                                                </button>
                                                                <div>
                                                                    <AnimateHeight duration={300} height={active === '2' ? 'auto' : 0}>
                                                                        <div className="p-2 grid grid-cols-1 lg:grid-cols-4">
                                                                            <h2 className="font-bold text-center text-white bg-blue-500 p-1 rounded-tl-xl">
                                                                                <span className="ml-2">TEST</span>
                                                                            </h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1">Result</h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1">Unit</h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1 rounded-tr-xl">Reference Range</h2>
                                                                        </div>
                                                                        <div className="p-2 grid grid-cols-1 lg:grid-cols-4 gap-4">
                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Clotting Time</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={clottingTimeResult}
                                                                                    onChange={(e) => {
                                                                                        setClottingTimeResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2"></div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={clottingTimeRange}
                                                                                    onChange={(e) => {
                                                                                        setClottingTimeRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>

                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">Bleeding Time</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={bleedingTimeResult}
                                                                                    onChange={(e) => {
                                                                                        setBleedingTimeResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2"></div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={bleedingTimeRange}
                                                                                    onChange={(e) => {
                                                                                        setBleedingTimeRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </AnimateHeight>
                                                                </div>
                                                            </div>
                                                            <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                                                <button
                                                                    type="button"
                                                                    className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active === '3' ? '!text-primary' : ''}`}
                                                                    onClick={() => togglePara('3')}
                                                                >
                                                                    Erythrocyte Sedimentation Rate (ESR)
                                                                    <div className={`ltr:ml-auto rtl:mr-auto ${active === '3' ? 'rotate-180' : ''}`}>
                                                                        <IconCaretDown />
                                                                    </div>
                                                                </button>
                                                                <div>
                                                                    <AnimateHeight duration={300} height={active === '3' ? 'auto' : 0}>
                                                                        <div className="p-2 grid grid-cols-1 lg:grid-cols-4">
                                                                            <h2 className="font-bold text-center text-white bg-blue-500 p-1 rounded-tl-xl">
                                                                                <span className="ml-2">TEST</span>
                                                                            </h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1">Result</h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1">Unit</h2>
                                                                            <h2 className="text-center font-bold bg-blue-500 text-white p-1 rounded-tr-xl">Reference Range</h2>
                                                                        </div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2">
                                                                            <h2 className="text-sm text-right mt-2 w-[70%]">ESR</h2>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={esrResult}
                                                                                    onChange={(e) => {
                                                                                        setEsrResult(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={esrUnit}
                                                                                    onChange={(e) => {
                                                                                        setEsrUnit(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-center items-center mt-2">
                                                                                <input
                                                                                    className="form-input ltr:rounded-l-none rtl:rounded-r-none"
                                                                                    value={esrRange}
                                                                                    onChange={(e) => {
                                                                                        setEsrRange(e.target.value);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </AnimateHeight>
                                                                </div>
                                                            </div>
                                                            <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                                                <button
                                                                    type="button"
                                                                    className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active === '4' ? '!text-primary' : ''}`}
                                                                    onClick={() => togglePara('4')}
                                                                >
                                                                    Blood Typing
                                                                    <div className={`ltr:ml-auto rtl:mr-auto ${active === '4' ? 'rotate-180' : ''}`}>
                                                                        <IconCaretDown />
                                                                    </div>
                                                                </button>
                                                                <div>
                                                                    <AnimateHeight duration={300} height={active === '4' ? 'auto' : 0}>
                                                                        <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                                                            <p>
                                                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                                                                aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                                                                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                                                                beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                                                                craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore
                                                                                sustainable VHS.
                                                                            </p>
                                                                            <button type="button" className="btn btn-primary mt-4">
                                                                                Accept
                                                                            </button>
                                                                        </div>
                                                                    </AnimateHeight>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="h-[1000px]">
                                                        <iframe
                                                            src={`https://localhost:7188/laboratoryResults/generate-hematology-review/${record.clientId}`}
                                                            width="100%"
                                                            height="1700px"
                                                            title="Lab PDF"
                                                            className="w-full h-full"
                                                        />
                                                    </div>
                                                </Tab.Panel>
                                            </Tab.Panels>
                                        </Tab.Group>
                                    )}
                                </div>

                                {/* Actions */}

                                <div className="flex justify-end items-center px-5 pb-5 gap-3">
                                    <button type="button" className="btn btn-info" onClick={onSubmit}>
                                        Save
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
