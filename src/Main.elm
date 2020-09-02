module Main exposing (main)

import Browser
import Html exposing (Html, button, div, span, text)
import Html.Attributes exposing (attribute, class)
import Html.Events exposing (onClick)



---- MODEL ----


type alias Model =
    Int


init : ( Model, Cmd Msg )
init =
    ( 0, Cmd.none )



---- UPDATE ----


type Msg
    = Increment
    | Decrement
    | Reset


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( model + 1, Cmd.none )

        Decrement ->
            ( model - 1, Cmd.none )

        Reset ->
            ( 0, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div [ class "app" ]
        [ div [ class "result" ]
            [ text "Результат: "
            , span [ attribute "data-cy" "result" ]
                [ text <| String.fromInt model ]
            ]
        , div [ class "buttons" ]
            [ button [ attribute "data-cy" "plus", onClick Increment ]
                [ text "+" ]
            , button [ attribute "data-cy" "minus", onClick Decrement ]
                [ text "-" ]
            , button [ attribute "data-cy" "reset", onClick Reset ]
                [ text "Сбросить    " ]
            ]
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
