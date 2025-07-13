// src/components/CategoryFilter.jsx
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <FormControl sx={{ mb: 2, width: 120 }}>
      <InputLabel>סינון לפי קטגוריה</InputLabel>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        label="סינון לפי קטגוריה"
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#fff", // White background for dropdown options
            },
          },
        }}
      >
        <MenuItem value="all">הצג הכל</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
