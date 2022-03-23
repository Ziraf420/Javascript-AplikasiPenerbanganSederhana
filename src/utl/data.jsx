
export const MASKAPAI = {
    GRD:{
        maskapai_id: "GRD",
        maskapai_nama: "Garuda Airline",
        maskapai_logo: "../images/garuda.png", 
    },
    SJW:{
        maskapai_id: "SJW",
        maskapai_nama: "Seriwijaya Air",
        maskapai_logo: "../images/sriwijaya.png", 
    },
    LIO:{
        maskapai_id: "LIO",
        maskapai_nama: "Lion Air",
        maskapai_logo: "../images/lion.png", 
    },
    WNG:{
        maskapai_id: "WNG",
        maskapai_nama: "Wings Air",
        maskapai_logo: "../images/pelita_air.png",
    },
    BTK:{
        maskapai_id: "BTK",
        maskapai_nama: "Batik Air",
        maskapai_logo: "../images/batik.png",
    },
    CTL:{
        maskapai_id: "CTL",
        maskapai_nama: "Citilink",
        maskapai_logo: "../images/citilink.png",
    },
};

export const BANDARA = {
    SKH:{
        bandara_kode: "SKH",
        bandara_nama: "Soekarno Hatta",
    },
    RDN:{
        bandara_kode: "RDN",
        bandara_nama: "Raden Intan",
    },
    NGR:{
        bandara_kode: "NGR",
        bandara_nama: "Ngurah Rai",
    },
    JND:{
        bandara_kode: "JND",
        bandara_nama: "Juanda",
    },
    HLM:{
        bandara_kode: "HLM",
        bandara_nama: "Halim Perdanakusuma",
    },
    ADJ:{
        bandara_kode: "ADJ",
        bandara_nama: "Adisutjipto",
    },
};

export const JADWAL = [
    {
        jadwal_id: "1",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "2",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "HLM",
        maskapai_id: "LIO"
    },
    {
        jadwal_id: "3",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "NGR",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "NGR",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "5",
        bandara_kode_keberangkatan: "JND",
        bandara_kode_tujuan: "JND",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "6",
        bandara_kode_keberangkatan: "JND",
        bandara_kode_tujuan: "ADJ",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "7",
        bandara_kode_keberangkatan: "JND",
        bandara_kode_tujuan: "ADJ",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "8",
        bandara_kode_keberangkatan: "NGR",
        bandara_kode_tujuan: "JND",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "9",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "ADJ",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "10",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "HLM",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "11",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "JND",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "12",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "13",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "14",
        bandara_kode_keberangkatan: "JND",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "15",
        bandara_kode_keberangkatan: "ADJ",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "16",
        bandara_kode_keberangkatan: "ADJ",
        bandara_kode_tujuan: "HLM",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "17",
        bandara_kode_keberangkatan: "ADJ",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "18",
        bandara_kode_keberangkatan: "ADJ",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "19",
        bandara_kode_keberangkatan: "ADJ",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "20",
        bandara_kode_keberangkatan: "ADJ",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "SJW"
    },

];