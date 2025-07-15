# training/train.py

import pandas as pd
import pickle
import json
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

from training.preprocess import clean_data

# 📁 Load & clean dataset
df = pd.read_csv("training/housing.csv")
df = clean_data(df)

# 🎯 Define input features and target
X = df.drop("median_house_value", axis=1)
y = df["median_house_value"]

# 🔥 Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 🧠 Train model
model = LinearRegression()
model.fit(X_train, y_train)

# 💾 Save model
with open("model_fitted.pkl", "wb") as f:
    pickle.dump(model, f)

# 📊 Save column names for API input mapping
column_map = { "columns": list(X.columns) }
with open("column_config.json", "w") as f:
    json.dump(column_map, f)

print("✅ Model and column config saved!")
