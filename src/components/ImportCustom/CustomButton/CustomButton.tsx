import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CustomButton(props: { name: string; clickFunction: () => void }) {
  const { name, clickFunction } = props;

  return (
    <Stack spacing={2} direction="row" sx={{ my: 2 }}>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => {clickFunction();}}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
      </Button>
    </Stack>
  );
}

export default CustomButton;