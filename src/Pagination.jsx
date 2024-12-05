import style from "./Painting.module.css";
function Pagination({
    onPageChange,
    CurrentPAge
    
}) {

    return (
        <div>
       <div class="pagination">
    <button class="page-btn" data-page="prev" onClick={()=> onPageChange(CurrentPAge - 1)}>&laquo;</button>
    <button class="page-btn active" data-page="1" onClick={()=> onPageChange(1)}>1</button>
    <button class="page-btn" data-page="2" onClick={()=> onPageChange(2)}>2</button>
    <button class="page-btn" data-page="3" onClick={()=> onPageChange(3)}>3</button>
    <button class="page-btn" data-page="4" onClick={()=> onPageChange(4)}>4</button>
    <button class="page-btn" data-page="5" onClick={()=> onPageChange(5)}>5</button>
    <button class="page-btn" data-page="next" onClick={()=> onPageChange(CurrentPAge +1)}>&raquo;</button>
  </div>
        </div>
            
    )
        


}



export default Pagination
