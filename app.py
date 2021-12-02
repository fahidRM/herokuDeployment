import dash
from dash import dcc, html

app = dash.Dash(__name__)

# required for gnuicorn
server = app.server

app.layout = html.Div([
    html.H2('Test deployment')
])



app.run_server(debug=True)
