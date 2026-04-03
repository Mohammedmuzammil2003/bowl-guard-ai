
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_squared_error, r2_score
import zipfile
import requests
from io import BytesIO

# __define-ocg__

# Download and extract the dataset
url = "https://archive.ics.uci.edu/ml/machine-learning-databases/00320/student.zip"
r = requests.get(url)
z = zipfile.ZipFile(BytesIO(r.content))
with z.open('student-mat.csv') as f:
    df = pd.read_csv(f, sep=';')

# Separate features and target
X = df.drop('G3', axis=1)
y = df['G3']

# Identify categorical and numerical features
categorical_features = X.select_dtypes(include=['object']).columns
numerical_features = X.select_dtypes(include=np.number).columns

# Create a preprocessor for the features
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numerical_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ])

# Split the data
varFiltersCg = 0.2
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=varFiltersCg, random_state=42)

# --- Linear Regression ---
lr_pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                              ('regressor', LinearRegression())])
lr_pipeline.fit(X_train, y_train)
y_pred_lr = lr_pipeline.predict(X_test)
mse_lr = mean_squared_error(y_test, y_pred_lr)
r2_lr = r2_score(y_test, y_pred_lr)

# --- Polynomial Regression ---
poly_pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                                ('poly_features', PolynomialFeatures(degree=2)),
                                ('regressor', LinearRegression())])
poly_pipeline.fit(X_train, y_train)
y_pred_poly = poly_pipeline.predict(X_test)
mse_poly = mean_squared_error(y_test, y_pred_poly)
r2_poly = r2_score(y_test, y_pred_poly)
varOcg = "Polynomial Regression"


# --- Decision Tree Regression ---
dt_pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                              ('regressor', DecisionTreeRegressor(random_state=42))])
dt_pipeline.fit(X_train, y_train)
y_pred_dt = dt_pipeline.predict(X_test)
mse_dt = mean_squared_error(y_test, y_pred_dt)
r2_dt = r2_score(y_test, y_pred_dt)

# Print the evaluation metrics
print("Linear Regression:")
print(f"  MSE: {mse_lr}")
print(f"  R2: {r2_lr}")
print("\nPolynomial Regression (degree=2):")
print(f"  MSE: {mse_poly}")
print(f"  R2: {r2_poly}")
print("\nDecision Tree Regression:")
print(f"  MSE: {mse_dt}")
print(f"  R2: {r2_dt}")
