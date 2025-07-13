// src/components/AddCostumeDialog.jsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function AddCostumeDialog({
  open,
  onClose,
  onSubmit,
  newCostume,
  setNewCostume,
  categories,
  showAddCategoryInput,
  setShowAddCategoryInput,
  newCategoryName,
  setNewCategoryName,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "#fff",
          borderRadius: 3,
          p: 2,
        },
      }}
    >
      <DialogTitle sx={{ direction: "rtl" }}>
        הוספת תלבושת חדשה
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", left: 8, top: 8, color: "error.main" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dir="rtl">
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 2, direction: "rtl" }}
        >
          <TextField
            label="שם"
            value={newCostume.name}
            onChange={(e) => setNewCostume({ ...newCostume, name: e.target.value })}
            required
            InputProps={{ style: { direction: "rtl" } }}
            sx={{ direction: "rtl" }}
          />
          {!showAddCategoryInput ? (
            <FormControl fullWidth sx={{ direction: "rtl" }}>
              <InputLabel sx={{ direction: "rtl" }}>קטגוריה</InputLabel>
              <Select
                value={newCostume.category}
                label="קטגוריה"
                onChange={(e) => setNewCostume({ ...newCostume, category: e.target.value })}
                sx={{ direction: "rtl" }}
                MenuProps={{
                  PaperProps: {
                    sx: { direction: "rtl" }
                  }
                }}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat} sx={{ direction: "rtl" }}>
                    {cat}
                  </MenuItem>
                ))}
                <MenuItem value="add-new" onClick={() => setShowAddCategoryInput(true)} sx={{ direction: "rtl" }}>
                  הוסף קטגוריה חדשה
                </MenuItem>
              </Select>
            </FormControl>
          ) : (
            <TextField
              label="קטגוריה חדשה"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              required
              InputProps={{ style: { direction: "rtl" } }}
              sx={{ direction: "rtl" }}
            />
          )}
          <TextField
            label="מידה"
            value={newCostume.size}
            onChange={(e) => setNewCostume({ ...newCostume, size: e.target.value })}
            required
            InputProps={{ style: { direction: "rtl" } }}
            sx={{ direction: "rtl" }}
          />
          <TextField
            label="כמות"
            type="number"
            inputProps={{ min: 0, style: { direction: "rtl" } }}
            value={newCostume.quantity}
            onChange={(e) => setNewCostume({ ...newCostume, quantity: +e.target.value })}
            required
            InputProps={{ style: { direction: "rtl" } }}
            sx={{ direction: "rtl" }}
          />
          <TextField
            label="מחיר ליום"
            type="number"
            inputProps={{ min: 0, style: { direction: "rtl" } }}
            value={newCostume.price_per_day}
            onChange={(e) => setNewCostume({ ...newCostume, price_per_day: +e.target.value })}
            required
            InputProps={{ style: { direction: "rtl" } }}
            sx={{ direction: "rtl" }}
          />
          <DialogActions sx={{ direction: "rtl" }}>
            <Button type="submit" variant="contained" color="primary">
              הוספה
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
