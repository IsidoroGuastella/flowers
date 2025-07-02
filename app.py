from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('start.html')  # nuova pagina iniziale

@app.route('/flowers')
def flowers():
    return render_template('index.html')  # pagina con l’animazione

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=50000, debug=True)
