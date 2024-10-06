import { Alert, Stack } from "@mui/material";
import useAlert from "../hooks/useAlert";

const AlertPopup = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert
          severity={type}
          variant="filled"
          sx={{
            position: "absolute",
            right: "20%",
            zIndex: 1000,
          }}
        >
          {text}
        </Alert>
      </Stack>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;