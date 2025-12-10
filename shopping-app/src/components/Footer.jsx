import "../index.css";
const Footer = ({items,packedItems}) => {

	return (
        <footer className="footer-wrapper">
            <span>Total Count:{items.length}</span>
            <span>...Completed Items:{packedItems}</span>
        </footer>
	);
};

export default Footer;
