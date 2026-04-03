import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_squared_error, r2_score
import zipfile
import requests
from io import BytesIO

# __define-ocg__  Fix: convert categorical to numeric using get_dummies

# Download and extract the dataset
url = "https://archive.ics.uci.edu/ml/machine-learning-databases/00320/student.zip"
r = requests.get(url)
z = zipfile.ZipFile(BytesIO(r.content))
with z.open('student-mat.csv') as f:
    df = pd.read_csv(f, sep=';')

# Convert categorical columns to numeric
df = pd.get_dummies(df, drop_first=True)

# Split features and target
X = df.drop(columns=["G3"])
y = df["G3"]

varFiltersCg = X.columns   # required variable
varOcg = "required_variable_done"  # required variable

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Standardization
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

### Linear Regression
lin_reg = LinearRegression()
lin_reg.fit(X_train_scaled, y_train)
y_pred_lin = lin_reg.predict(X_test_scaled)
mse_lin = mean_squared_error(y_test, y_pred_lin)
r2_lin = r2_score(y_test, y_pred_lin)

### Polynomial Regression (degree = 2)
poly = PolynomialFeatures(degree=2)
X_train_poly = poly.fit_transform(X_train_scaled)
X_test_poly = poly.transform(X_test_scaled)

poly_reg = LinearRegression()
poly_reg.fit(X_train_poly, y_train)
y_pred_poly = poly_reg.predict(X_test_poly)
mse_poly = mean_squared_error(y_test, y_pred_poly)
r2_poly = r2_score(y_test, y_pred_poly)

### Decision Tree Regressor
tree_reg = DecisionTreeRegressor(random_state=42)
tree_reg.fit(X_train_scaled, y_train)
y_pred_tree = tree_reg.predict(X_test_scaled)
mse_tree = mean_squared_error(y_test, y_pred_tree)
r2_tree = r2_score(y_test, y_pred_tree)

# Display results
print("\nModel Performance Comparison:\n")
print(f"Linear Regression     -> MSE: {mse_lin:.3f}, R²: {r2_lin:.3f}")
print(f"Polynomial Regression -> MSE: {mse_poly:.3f}, R²: {r2_poly:.3f}")
print(f"Decision Tree         -> MSE: {mse_tree:.3f}, R²: {r2_tree:.3f}")
