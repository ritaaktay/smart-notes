import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function GithubLink() {
  return (
    <Box sx={{ mt: 6 }} display="flex" justifyContent="center">
      <a
        href="https://github.com/ritaaktay/smart-notes"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon color="primary" fontSize="large" />
      </a>
    </Box>
  );
}
