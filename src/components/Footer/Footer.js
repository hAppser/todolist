import './styles.css'
const Footer = ({count, clearTasks}) => {
    return (  
        <div className="flex justify-between border-t text-base lg:mt-44 mb-10 pt-5">
            <div className='text-footer'>
                {count ? count : 0} {count < 2 ? 'item' : 'items'} selected
            </div>
            <div>
                <div 
                    className='cursor-pointer text-footer hover:text-red-700'
                    onClick={clearTasks}
                >Clear all</div>
            </div>
        </div>
    );
}
 
export default Footer;