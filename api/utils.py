import json
import numpy as np


with open("api/column_config.json", "r") as f:
    config = json.load(f)


def prepare_input(data):
    vector = np.zeros(len(config["columns"]))
    for feature in config["columns"]:
        if feature in data:
            vector[config["columns"].index(feature)] = data[feature]
    return vector.reshape(1, -1)


def prepare_input(payload: dict):
    feature_order = [
        'longitude', 'latitude', 'housing_median_age', 'total_rooms',
        'total_bedrooms', 'population', 'households', 'median_income',
        'ocean_proximity_INLAND', 'ocean_proximity_ISLAND',
        'ocean_proximity_NEAR_BAY', 'ocean_proximity_NEAR_OCEAN'
    ]

    vector = []
    for feature in feature_order:
        value = payload.get(feature)
        try:
            # Convert ocean proximity flags to int, the rest to float
            if "ocean_proximity" in feature:
                vector.append(int(value))
            else:
                vector.append(float(value))
        except (ValueError, TypeError):
            raise ValueError(f"Invalid value for '{feature}': {value}")

    # Add constant at the beginning
    vector = [1.0] + vector

    return np.array(vector).reshape(1, -1)
