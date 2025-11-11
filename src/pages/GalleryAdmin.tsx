import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import type { GalleryItem } from "@/data/galleryItems";
import { galleryItems as defaultGalleryItems } from "@/data/galleryItems";

const STORAGE_KEY = "baget_gallery_items";
const PASSWORD_KEY = "baget_admin_password";
const DEFAULT_PASSWORD = "mag-baget-2024";

const GalleryAdmin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newItem, setNewItem] = useState<GalleryItem>({ image: "", alt: "", title: "" });
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const savedPassword = localStorage.getItem(PASSWORD_KEY);
    if (savedPassword === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      loadGalleryItems();
    }
  }, []);

  const loadGalleryItems = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setGalleryItems(JSON.parse(saved));
      } catch {
        setGalleryItems(defaultGalleryItems);
      }
    } else {
      setGalleryItems(defaultGalleryItems);
    }
  };

  const saveGalleryItems = (items: GalleryItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setGalleryItems(items);
  };

  const handleLogin = () => {
    if (password === DEFAULT_PASSWORD) {
      localStorage.setItem(PASSWORD_KEY, password);
      setIsAuthenticated(true);
      loadGalleryItems();
      toast.success("Вход выполнен успешно");
    } else {
      toast.error("Неверный пароль");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(PASSWORD_KEY);
    setIsAuthenticated(false);
    setPassword("");
    navigate("/");
  };

  const handleDelete = (index: number) => {
    if (confirm("Удалить это изображение из галереи?")) {
      const updated = galleryItems.filter((_, i) => i !== index);
      saveGalleryItems(updated);
      toast.success("Изображение удалено");
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setNewItem(galleryItems[index]);
  };

  const handleSaveEdit = () => {
    if (editingIndex === null) return;
    
    if (!newItem.image || !newItem.title) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    const updated = [...galleryItems];
    updated[editingIndex] = newItem;
    saveGalleryItems(updated);
    setEditingIndex(null);
    setNewItem({ image: "", alt: "", title: "" });
    toast.success("Изображение обновлено");
  };

  const handleAddNew = () => {
    if (!newItem.image || !newItem.title) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    const updated = [...galleryItems, newItem];
    saveGalleryItems(updated);
    setNewItem({ image: "", alt: "", title: "" });
    setIsAddingNew(false);
    toast.success("Изображение добавлено");
  };

  const handleResetToDefault = () => {
    if (confirm("Вернуть галерею к исходному состоянию? Все изменения будут потеряны.")) {
      localStorage.removeItem(STORAGE_KEY);
      setGalleryItems(defaultGalleryItems);
      toast.success("Галерея восстановлена");
    }
  };

  const uploadImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error("Пожалуйста, выберите изображение");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Размер файла не должен превышать 5 МБ");
      return;
    }

    setIsUploading(true);
    try {
      const base64 = await uploadImageToBase64(file);
      setNewItem({ ...newItem, image: base64 });
      toast.success("Изображение загружено");
    } catch (error) {
      toast.error("Ошибка загрузки изображения");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center mb-6">
            <Icon name="Lock" size={48} className="mx-auto mb-4 text-accent" />
            <h1 className="text-2xl font-bold mb-2">Админ-панель галереи</h1>
            <p className="text-muted-foreground">Введите пароль для доступа</p>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Введите пароль"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Войти
            </Button>
            <Button onClick={() => navigate("/")} variant="outline" className="w-full">
              Вернуться на сайт
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-card rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Управление галереей</h1>
              <p className="text-muted-foreground">Всего изображений: {galleryItems.length}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => setIsAddingNew(true)} className="gap-2">
                <Icon name="Plus" size={20} />
                Добавить изображение
              </Button>
              <Button onClick={handleResetToDefault} variant="outline" className="gap-2">
                <Icon name="RotateCcw" size={20} />
                Сбросить
              </Button>
              <Button onClick={handleLogout} variant="destructive" className="gap-2">
                <Icon name="LogOut" size={20} />
                Выход
              </Button>
            </div>
          </div>
        </div>

        {(isAddingNew || editingIndex !== null) && (
          <div className="bg-card rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">
              {isAddingNew ? "Добавить новое изображение" : "Редактировать изображение"}
            </h2>
            <div className="space-y-4">
              <div>
                <Label>Изображение *</Label>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    isDragging ? 'border-accent bg-accent/10' : 'border-muted-foreground/20'
                  }`}
                >
                  <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="mb-4 text-muted-foreground">
                    Перетащите изображение сюда или
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file);
                    }}
                    className="hidden"
                    id="file-upload"
                    disabled={isUploading}
                  />
                  <label htmlFor="file-upload">
                    <Button type="button" variant="outline" asChild disabled={isUploading}>
                      <span className="cursor-pointer">
                        {isUploading ? "Загрузка..." : "Выбрать файл"}
                      </span>
                    </Button>
                  </label>
                  <p className="mt-4 text-xs text-muted-foreground">Максимум 5 МБ</p>
                </div>
              </div>
              <div>
                <Label htmlFor="image-url">или вставьте URL</Label>
                <Input
                  id="image-url"
                  value={newItem.image.startsWith('data:') ? '' : newItem.image}
                  onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  disabled={isUploading}
                />
              </div>
              <div>
                <Label htmlFor="title">Название *</Label>
                <Input
                  id="title"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  placeholder="Название работы"
                />
              </div>
              <div>
                <Label htmlFor="alt">Описание (ALT)</Label>
                <Input
                  id="alt"
                  value={newItem.alt}
                  onChange={(e) => setNewItem({ ...newItem, alt: e.target.value })}
                  placeholder="Описание для поисковиков"
                />
              </div>
              {newItem.image && (
                <div>
                  <Label>Предпросмотр</Label>
                  <img
                    src={newItem.image}
                    alt="Предпросмотр"
                    className="w-full max-w-md h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999'%3EОшибка загрузки%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              )}
              <div className="flex gap-2">
                <Button
                  onClick={isAddingNew ? handleAddNew : handleSaveEdit}
                  className="gap-2"
                >
                  <Icon name="Check" size={20} />
                  Сохранить
                </Button>
                <Button
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingIndex(null);
                    setNewItem({ image: "", alt: "", title: "" });
                  }}
                  variant="outline"
                  className="gap-2"
                >
                  <Icon name="X" size={20} />
                  Отмена
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.alt}</p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(index)}
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                  >
                    <Icon name="Pencil" size={16} />
                    Изменить
                  </Button>
                  <Button
                    onClick={() => handleDelete(index)}
                    variant="destructive"
                    size="sm"
                    className="flex-1 gap-2"
                  >
                    <Icon name="Trash2" size={16} />
                    Удалить
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryAdmin;