// src/components/CostumeTable.jsx
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CostumeTable({ costumes, onDelete }) {
  return (
    <Paper elevation={4} sx={{ borderRadius: 3, p: 3, maxWidth: 820, width: "100%" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {["שם", "קטגוריה", "מידה", "כמות", "מחיר ליום", "מחיקה"].map((title, i) => (
                <TableCell
                  key={i}
                  align="center"
                  sx={{ bgcolor: "secondary.main", color: "#fff", fontWeight: "bold" }}
                >
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {costumes.length > 0 ? (
              costumes.map((c) => (
                <TableRow key={c.id} hover>
                  <TableCell align="center">{c.name}</TableCell>
                  <TableCell align="center">{c.category}</TableCell>
                  <TableCell align="center">{c.size}</TableCell>
                  <TableCell align="center">{c.quantity}</TableCell>
                  <TableCell align="center">{c.price_per_day} ₪</TableCell>
                  <TableCell align="center">
                    <IconButton color="error" onClick={() => onDelete(c.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={6}>
                  לא נמצאו תלבושות
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
