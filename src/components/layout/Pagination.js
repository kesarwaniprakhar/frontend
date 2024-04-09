import { Pagination as MuiPagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { changeToPage } from "../../slices/paginationSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const CustomizedPagination = styled(MuiPagination)`
  & .MuiPagination-ul {
    justify-content: center;
  }
`;

function Pagination(props) {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const numOfPages = useSelector((state) => {
    return state.product.totalCount / 4;
  });

  const pageChangeHandler = (event, page) => {
    //not using redux page anymore can comment this code out.
    dispatch(
      changeToPage({
        page: parseInt(page),
      })
    );
    //

    if (searchParams.has("page")) {
      searchParams.set("page", page);
    } else {
      searchParams.append("page", page);
    }

    navigate(window.location.pathname + "?" + searchParams.toString());
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
