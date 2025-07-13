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
      dir="rtl"
      maxWidth="xs"
      fullWidth={false}
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: "background.paper",
          border: "2px solid",
          borderColor: "primary.main",
          p: 2,
        },
      }}
    >
      <DialogTitle>
        הוספת תלבושת חדשה
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", left: 8, top: 8, color: "error.main" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="שם"
            value={newCostume.name}
            onChange={(e) => setNewCostume({ ...newCostume, name: e.target.value })}
            required
          />
          {!showAddCategoryInput ? (
            <FormControl fullWidth>
              <InputLabel>קטגוריה</InputLabel>
              <Select
                value={newCostume.category}
                label="קטגוריה"
                onChange={(e) => setNewCostume({ ...newCostume, category: e.target.value })}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
                <MenuItem value="add-new" onClick={() => setShowAddCategoryInput(true)}>
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
            />
          )}
          <TextField
            label="מידה"
            value={newCostume.size}
            onChange={(e) => setNewCostume({ ...newCostume, size: e.target.value })}
            required
          />
          <TextField
            label="כמות"
            type="number"
            inputProps={{ min: 0 }}
            value={newCostume.quantity}
            onChange={(e) => setNewCostume({ ...newCostume, quantity: +e.target.value })}
            required
          />
          <TextField
            label="מחיר ליום"
            type="number"
            inputProps={{ min: 0 }}
            value={newCostume.price_per_day}
            onChange={(e) => setNewCostume({ ...newCostume, price_per_day: +e.target.value })}
            required
          />
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              הוספה
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
