import React,{useState, useEffect} from 'react';
import Drug from '../Drug';
import './Contain.css';

// eslint-disable-next-line no-unused-vars
const data = [
    {"id":"1","name":"Abacavir","dose":"300mg","dosageForm":"tablet","price":"140.93","img":"https://www.3scorporation.com/wp-content/uploads/2019/03/Abacavir-Lamivudine-and-Zidovudine.jpg"},
    {"id":"2","name":"Acetazolamide","dose":"250mg","dosageForm":"tablet","price":"2.00","img":"https://5.imimg.com/data5/VQ/AV/MY-38289476/acetazolamide-tablets-ip-500x500.jpg"},
    {"id":"3","name":"Aciclovir ","dose":"200mg","dosageForm":"powder for injection,tablet","price":"360","img":"https://d28r9i8264kjow.cloudfront.net/wp-content/uploads/2017/10/aciclovir-tablets-1.jpg"},{"id":"4","name":"Albendazole","dose":"200mg","dosageForm":"chewable-tablet","price":"4.00","img":"https://3.imimg.com/data3/LB/VP/MY-2764690/albendazole-tablets-200-mg-500x500.jpg"},{"id":"5","name":"Amoxicillin","dose":"500mg","dosageForm":"capsule","price":"4.00","img":"https://dentagama.com/img/150920091054Amoxicillin.jpg"},
    {"id":"6","name":"Ampicillin ","dose":"250mg","dosageForm":"tablet","price":"3.25","img":"https://5.imimg.com/data5/OP/CB/EX/SELLER-10593466/ampicillin-capsules-500x500.jpeg"},
    {"id":"7","name":"Ascorbic Acid","dose":"1000mg","dosageForm":"tablet","price":"790","img":"https://www.kikinben.com/pub/media/catalog/product/cache/image/720x660/e9c3970ab036de70892d86c6d221abfe/n/a/natures-aid-vitamin-c.jpg"},
    {"id":"8","name":"Atenolol ","dose":"200mg","dosageForm":"tablet","price":"4.00","img":"http://www.squarepharma.com.bd/products/CAMLODIN-PIUS-25.jpg"},
    {"id":"9","name":"Amitriptyline","dose":"200mg","dosageForm":"tablet","price":"1.75","img":"https://5.imimg.com/data5/MB/ZY/PE/SELLER-4932387/trip-10-500x500.jpg"},
    {"id":"10","name":"Atropine","dose":"Atropine sulphate 0.6mg/lml ampoule","dosageForm":"injection,eye-drop","price":"126","img":"https://nazmuldrugs.com/wp-content/uploads/2020/05/atropin-0.6mgml.jpeg"},{"id":"11","name":"BCG vaccine","dose":"200mg","dosageForm":"injection","price":"400","img":"https://www.pharmaceutical-technology.com/wp-content/uploads/sites/10/2020/04/BCG_1773723959-e1599206450263.jpg"},{"id":"12","name":"Benzyl benzoate ","dose":"200mg","dosageForm":"lotion","price":"18.21","img":"https://5.imimg.com/data5/CJ/HK/WO/SELLER-13861678/benzel-benzoaet-500x500.jpg"}
]

const DrugsContainer = (props) => {
    const [drugsItem, setDrugsItem] = useState([]);
    
    useEffect(() => {
        fetch('./drugs.JSON')
        .then(res => res.json())
        .then(data => setDrugsItem(data));
      }, []);

    return (
        <div className="row">
            {
                drugsItem && drugsItem.map((drug, index) => 
                    <Drug key={index} 
                        drug = {drug} 
                        drugListArray = {props.drugListArray} 
                        setDrugListArray = {props.setDrugListArray}
                        total = {props.total}
                        setTotal = {props.setTotal}
                    />
                )}
        </div>
    );
};

export default DrugsContainer;
