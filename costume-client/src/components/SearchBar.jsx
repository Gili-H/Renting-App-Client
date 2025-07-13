// components/SearchBar.jsx
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBar({ filter, setFilter, showSearch, setShowSearch }) {
  return (
    <div style={{ position: "absolute", top: 32, left: 32, width: showSearch ? 300 : 48, transition: "width 0.2s" }}>
      {!showSearch ? (
        <IconButton color="primary" onClick={() => setShowSearch(true)} style={{ backgroundColor: "#fff", boxShadow: 1 }}>
          <SearchIcon />
        </IconButton>
      ) : (
        <TextField
          autoFocus
          label="חיפוש תלבושת"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          fullWidth
          style={{ backgroundColor: "#fff" }}
          InputProps={{
            style: { direction: "rtl" },
            endAdornment: (
              <IconButton
                size="small"
                onClick={() => {
                  setShowSearch(false);
                  setFilter("");
                }}
              >
                <CloseIcon />
              </IconButton>
            ),
          }}
        />
      )}
    </div>
  );
}
