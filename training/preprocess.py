import pandas as pd

def clean_data(df):
    df.dropna(inplace=True)
    df = pd.get_dummies(df, columns=["ocean_proximity"], drop_first=True)
    return df
