import styles from './styles.module.css'

const Pagination = ({totalPages, handleNextPage, handlePreviusPage, handlePageClick, currentPage}) => {
   return (
    <div className={styles.pagination}>
        <button 
            onClick={handlePreviusPage} 
            className={styles.arrow}
            disabled={currentPage<=1}
            >{'<'}
            
        </button>
        <div className={styles.list}>
            {[...Array(totalPages)].map((_, index) => {
                return <button 
                onClick={()=>handlePageClick(index + 1)} 
                className={styles.pageNumber} 
                disabled={index+1===currentPage}
                key={index}>{index + 1}
                </button>
            })}
        </div>
        <button onClick={handleNextPage} disabled={currentPage>=totalPages} className={styles.arrow}>{'>'}</button>
    </div>
   )  
};

export default Pagination