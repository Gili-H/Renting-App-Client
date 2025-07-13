import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Fab,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import {
  getAllCostumes,
  createCostume,
  deleteCostume,
} from "../api/costume";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import CostumeTable from "../components/CostumeTable";
import AddCostumeDialog from "../components/AddCostumeDialog";

import {
  mainBoxSx,
  titleBoxSx,
  tableContainerSx,
  categoryFilterBoxSx,
  fabSx,
  addDialogPaperSx,
  searchBarBoxSx,
} from "./CostumesPage.Style";

// Theme setup
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "'Varela Round', 'Segoe UI', Arial, sans-serif",
  },
  palette: {
    primary: { main: "#2BBAA5" },
    secondary: { main: "#F9A822" },
    background: {
      default: "#93D3AE",
      paper: "#FAECB6",
    },
    error: { main: "#F96635" },
  },
});

export default function CostumesPage() {
  const [costumes, setCostumes] = useState([]);
  const [filter, setFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [newCostume, setNewCostume] = useState({
    name: "",
    category: "",
    size: "",
    quantity: 0,
    price_per_day: 0,
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAddCategoryInput, setShowAddCategoryInput] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    loadCostumes();
  }, []);

  const loadCostumes = async () => {
    const data = await getAllCostumes();
    setCostumes(data);
    const uniqueCategories = [...new Set(data.map((c) => c.category))];
    setCategories(uniqueCategories);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const categoryToUse =
      newCategoryName && showAddCategoryInput
        ? newCategoryName
        : newCostume.category;

    await createCostume({ ...newCostume, category: categoryToUse });

    setNewCostume({
      name: "",
      category: "",
      size: "",
      quantity: 0,
      price_per_day: 0,
    });

    setNewCategoryName("");
    setShowAddCategoryInput(false);
    setShowAddModal(false);
    await loadCostumes();
  };

  const handleDelete = async (id) => {
    await deleteCostume(id);
    await loadCostumes();
  };

  const filteredCostumes = costumes.filter(
    (c) =>
      (selectedCategory === "all" || c.category === selectedCategory) &&
      c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={mainBoxSx}>
        <SearchBar
          filter={filter}
          setFilter={setFilter}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />

        <Box sx={titleBoxSx}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            ניהול תלבושות
          </Typography>
        </Box>

        <Box sx={tableContainerSx}>
          <Box sx={categoryFilterBoxSx}>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Box>
          <CostumeTable costumes={filteredCostumes} onDelete={handleDelete} />
        </Box>

        <Fab
          color="primary"
          sx={fabSx}
          onClick={() => setShowAddModal(true)}
        >
          <AddIcon sx={{ fontSize: 38 }} />
        </Fab>

        <AddCostumeDialog
          open={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAdd}
          newCostume={newCostume}
          setNewCostume={setNewCostume}
          categories={categories}
          showAddCategoryInput={showAddCategoryInput}
          setShowAddCategoryInput={setShowAddCategoryInput}
          newCategoryName={newCategoryName}
          setNewCategoryName={setNewCategoryName}
        />
      </Box>
    </ThemeProvider>
  );
}
