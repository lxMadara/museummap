import style from "./Painting.module.css";
function Pagination({
}) {

    return (
        <div>
       <div class="pagination">
    <button class="page-btn" data-page="prev">&laquo;</button>
    <button class="page-btn active" data-page="1">1</button>
    <button class="page-btn" data-page="2">2</button>
    <button class="page-btn" data-page="3">3</button>
    <button class="page-btn" data-page="4">4</button>
    <button class="page-btn" data-page="5">5</button>
    <button class="page-btn" data-page="next">&raquo;</button>
  </div>
        </div>
            
    )
        


}



export default Pagination
