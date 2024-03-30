import { Pagination as MuiPagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { changeToPage } from "../../slices/paginationSlice";

const CustomizedPagination = styled(MuiPagination)`
  & .MuiPagination-ul {
    justify-content: center;
  }
`;

function Pagination(props) {

    const dispatch = useDispatch()
    
    const numOfPages = useSelector((state)=>{
        return (state.product.totalCount) / 4
    })
  
    const pageChangeHandler = (event, page) => {
    dispatch(changeToPage({
        page: parseInt(page) 
    }))
  };

  return (
    <Stack spacing={2}>
      <CustomizedPagination
        showFirstButton
        showLastButton
        count={numOfPages}
        variant="outlined"
        shape="rounded"
        onChange={pageChangeHandler}
        siblingCount={1}
        boundaryCount={1}
      />
    </Stack>
  );
}

export default Pagination;
