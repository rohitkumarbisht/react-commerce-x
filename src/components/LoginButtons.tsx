import { Button, Stack } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { login, logout } from "../store/slices/userSlice";

export default function LoginButtons() {
  const dispatch = useAppDispatch();

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => dispatch(login({ role: "Admin", name: "Alice" }))}>
        Login as Admin
      </Button>
      <Button variant="contained" onClick={() => dispatch(login({ role: "Blogger", name: "Bob" }))}>
        Login as Blogger
      </Button>
      <Button variant="outlined" color="error" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Stack>
  );
}
