import pickle

with open("models/model_fitted.pickle", "rb") as f:
    model = pickle.load(f)

def predict(vector):
    return model.predict(vector)[0]
